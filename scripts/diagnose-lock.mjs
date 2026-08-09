import { promises as fs } from 'node:fs';
import sharp from 'sharp';

const fullPath = 'public/assets/hitokora.jpg';
const tmpPath = fullPath + '.tmp';
const log = (...args) => console.log(new Date().toISOString().slice(11, 19), ...args);

try {
  log('1) stat…');
  const st = await fs.stat(fullPath);
  log('   size =', st.size);

  log('2) sharp metadata…');
  const m = await sharp(fullPath).metadata();
  log('   format =', m.format, 'w =', m.width, 'h =', m.height);

  log('3) sharp write tmp…');
  await sharp(fullPath)
    .rotate()
    .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmpPath);
  log('   tmp written, size =', (await fs.stat(tmpPath)).size);

  log('4) rename tmp -> original…');
  try {
    await fs.rename(tmpPath, fullPath);
    log('   rename OK');
  } catch (e) {
    log('   rename FAILED:', e.message);
    log('5) copyFile fallback…');
    try {
      await fs.copyFile(tmpPath, fullPath);
      await fs.rm(tmpPath, { force: true });
      log('   copyFile OK');
    } catch (e2) {
      log('   copyFile FAILED:', e2.message);
    }
  }
  log('DONE');
} catch (err) {
  log('ERROR at step:', err.message);
}
