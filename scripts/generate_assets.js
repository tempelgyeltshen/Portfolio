const assetsList = [
  // User explicitly requested names:
  { name: 'carental1.jpg' }, { name: 'carental2.jpg' }, { name: 'thangpainting1.jpg' }, { name: 'thangpainting2.jpg' }, { name: 'thangpainting3.jpg' },
  
  // All other group companies & sections:
  { name: 'travelers1.jpg' }, { name: 'travelers2.jpg' }, { name: 'travelers3.jpg' }, { name: 'trading1.jpg' }, { name: 'food247_1.jpg' }, { name: 'enterprise1.jpg' }, { name: 'hitokara1.jpg' }, { name: 'chairman_pema_tshering.jpg' },
  
  // 5 Real Regions:
  { name: 'region_thimphu.jpg' }, { name: 'region_paro.jpg' }, { name: 'region_punakha.jpg' }, { name: 'region_bumthang.jpg' }, { name: 'region_gangtey.jpg' }
];

console.log('Upload JPG replacements using these filenames:');
assetsList.forEach(({ name }) => console.log(`- ${name}`));
