
hk// Lists the actual filenames the app references (see src/data/assets.ts),
// grouped by division. Upload replacement images using these exact names.
const assetsList = [
  // Car Rental Division
  { name: 'carental1.jpg' }, { name: 'carental2.jpg' }, { name: 'carental3.jpg' },

  // Thangka Gallery & Painting (note: thangpainting1 is a .webp with a special
  // character in its name — URL-encoded in the app as Showroom%20ps%E0%BC%8B1@3x.webp)
  { name: 'Showroom ps་1@3x.webp' }, { name: '26.jpeg' }, { name: '30.jpeg' },

  // High Quality Travelers
  { name: 'travelers1.jpg' }, { name: 'travelers2.jpg' }, { name: 'travelers3.jpg' },

  // Commercial & Food & Enterprise & Lounge
  { name: 'trading.jpeg' }, { name: 'restaurant.jpeg' }, { name: 'image.png' },
  { name: 'hitokora.jpg' }, { name: 'karokae.webp' },

  // Leadership
  { name: 'chairman_pema_tshering.png' }, { name: 'CEO Pic.jpeg' },

  // Core 5 Bhutan Operational Regions (region_bumthang is hosted on Wikimedia
  // Commons and needs no local file)
  { name: 'thimphu_region.jpg' }, { name: 'region_paro.jpg' },
  { name: 'region_punakha.png' }, { name: 'gangtey_region.jpg' },
];

console.log('Upload replacement images using these filenames:');
assetsList.forEach(({ name }) => console.log(`- ${name}`));
