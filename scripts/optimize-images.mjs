/**
 * optimize-images.mjs
 * --------------------
 * Resizes & compresses every image in `public/assets` to web-friendly sizes.
 *
 * - JPEG  -> max 1920px longest side, quality 80 (mozjpeg)
 * - PNG   -> max 1920px longest side, best-effort recompression
 *            (small PNGs are left untouched — re-encoding can bloat them)
 * - WEBP  -> max 1920px longest side, quality 80
 *
 * Files that are briefly locked (OneDrive / antivirus) are re-attempted
 * automatically every 30s until they succeed or the attempt budget runs out.
 *
 * Originals are NOT touched here — a copy of the pre-optimization files is kept
 * in `image-originals-backup/`.
 *
 * Usage:
 *   npm run optimize:images                     # all images
 *   npm run optimize:images -- --only a.jpg,b.jpg   # only listed files
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS_DIR = path.resolve('public/assets');
const MAX_EDGE = 1920;
const JPEG_QUALITY = 80;
const MAX_ATTEMPTS = 8;
const ATTEMPT_DELAY_MS = 30_000;

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

const kb = (n) => (n / 1024).toFixed(0);
const mb = (n) => (n / (1024 * 1024)).toFixed(1);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function onlyFilter() {
  const idx = process.argv.indexOf('--only');
  if (idx === -1 || !process.argv[idx + 1]) return null;
  return new Set(process.argv[idx + 1].split(',').map((s) => s.trim().toLowerCase()));
}

/** Replace original with the optimized tmp — rename first, then copyFile fallback. */
async function tryReplace(tmpPath, originalPath) {
  try {
    await fs.rename(tmpPath, originalPath);
    return true;
  } catch {
    /* fall through to copyFile */
  }
  try {
    await fs.copyFile(tmpPath, originalPath);
    await fs.rm(tmpPath, { force: true });
    return true;
  } catch {
    await fs.rm(tmpPath, { force: true });
    return false;
  }
}

async function optimizeFile(fullPath) {
  const metadata = await sharp(fullPath).metadata();
  const isPng = metadata.format === 'png';
  const isWebp = metadata.format === 'webp';

  if (isPng && metadata.width <= MAX_EDGE && metadata.height <= MAX_EDGE) {
    return { status: 'unchanged' };
  }

  const pipeline = sharp(fullPath)
    .rotate() // bake in EXIF orientation
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
    });

  const tmpPath = fullPath + '.tmp';
  if (isPng) {
    await pipeline.png({ compressionLevel: 9, adaptiveFiltering: false }).toFile(tmpPath);
  } else if (isWebp) {
    await pipeline.webp({ quality: JPEG_QUALITY }).toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
  }

  if (!(await tryReplace(tmpPath, fullPath))) {
    throw new Error('file is locked (replace failed)');
  }
  return { status: 'ok' };
}

async function main() {
  const only = onlyFilter();
  const entries = await fs.readdir(ASSETS_DIR);
  const files = entries.filter(
    (f) => IMAGE_EXT.test(f) && (!only || only.has(f.toLowerCase()))
  );

  if (files.length === 0) {
    console.log('No image files to process in public/assets.');
    return;
  }

  console.log(`Optimizing ${files.length} image(s) in ${ASSETS_DIR} …\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let skipped = 0;

  for (const file of files) {
    const fullPath = path.join(ASSETS_DIR, file);

    let statBefore;
    try {
      statBefore = await fs.stat(fullPath);
    } catch {
      continue;
    }
    totalBefore += statBefore.size;

    let done = false;
    let before = statBefore.size;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const result = await optimizeFile(fullPath);
        const statAfter = await fs.stat(fullPath);
        totalAfter += statAfter.size;

        if (result.status === 'unchanged') {
          console.log(
            `  ${file.padEnd(28)} ${kb(before).padStart(6)} KB → unchanged (small PNG)`
          );
        } else {
          const pct = ((1 - statAfter.size / before) * 100).toFixed(0);
          console.log(
            `  ${file.padEnd(28)} ${kb(before).padStart(6)} KB → ${kb(statAfter.size).padStart(6)} KB  (−${pct}%)`
          );
        }
        done = true;
        break;
      } catch (err) {
        const attemptsLeft = MAX_ATTEMPTS - attempt;
        if (attemptsLeft > 0) {
          console.warn(
            `  ⏳ ${file}: locked (${err.message}) — retrying in 30s (${attemptsLeft} more attempt(s))…`
          );
          await sleep(ATTEMPT_DELAY_MS);
        }
      }
    }

    if (!done) {
      skipped++;
      console.warn(`  ⚠ ${file}: still locked after ${MAX_ATTEMPTS} attempts — left untouched.`);
    }
  }

  console.log(
    `\nDone. ${mb(totalBefore)} MB → ${mb(totalAfter)} MB total (−${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}%). ${skipped} file(s) skipped.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
