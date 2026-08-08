/**
 * Centralized Image Assets Registry for High Quality Pvt. Ltd.
 * 
 * Local files take precedence. The entries marked as Wikimedia Commons are
 * representative Bhutan imagery used only until an owned photograph is supplied.
 */

export const ASSETS = {
  // Car Rental Division
  carental1: '/assets/carental1.jpg',
  carental2: '/assets/carental2.jpg',

  // Thangka Gallery & Painting
  thangpainting1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutanese_painted_thanka_of_Milarepa_(1052-1135)%2C_Late_19th-early_20th_Century%2C_Dhodeydrag_Gonpa%2C_Thimphu%2C_Bhutan.jpg',
  thangpainting2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutanese_painted_thanka_of_the_Jataka_Tales%2C_18th-19th_Century%2C_Phajoding_Gonpa%2C_Thimphu%2C_Bhutan.jpg',
  thangpainting3: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutanese_Drukpa_applique_Buddhist_lineage_thonka_with_Shakyamuni_Buddha_in_center%2C_19th_century%2C_Ruben_Museum_of_Art.jpg',

  // High Quality Travelers
  travelers1: '/assets/travelers1.jpg',
  travelers2: '/assets/travelers2.jpg',
  travelers3: '/assets/travelers3.jpg',

  // Commercial & Food & Enterprise & Lounge
  trading1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thimphu_handicraft_market_-_Bhutan.jpg',
  food247_1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutan_kitchen_restaurant_with_phallic_painting_on_the_wall.jpg',
  enterprise1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutan_Power_Corporation_office_Thimphu.jpg',
  hitokara1: '/assets/hitokora.jpg',

  // Leadership
  chairman_pema_tshering: '/assets/chairman_pema_tshering.png',

  // Core 5 Bhutan Operational Regions
  region_thimphu: '/assets/thimphu_region.jpg',
  region_paro: '/assets/region_paro.jpg',
  region_punakha: '/assets/region_punakha.png',
  region_bumthang: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bumthang-Tal_in_Bhutan.jpg',
  region_gangtey: '/assets/gangtey_region.jpg',
} as const;

/** Attribution for the externally hosted, Creative Commons images above. */
export const EXTERNAL_IMAGE_CREDITS = [
  {
    label: 'Bhutanese thangka paintings',
    href: 'https://commons.wikimedia.org/wiki/Category:Thangka_from_Bhutan',
  },
  {
    label: 'Thimphu handicraft market — Prof Ranga Sai (CC BY-SA 4.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Thimphu_handicraft_market_-_Bhutan.jpg',
  },
  {
    label: 'Bhutan Kitchen Restaurant — juandazeng (CC BY 2.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Bhutan_kitchen_restaurant_with_phallic_painting_on_the_wall.jpg',
  },
  {
    label: 'Bhutan Power Corporation office — Christopher J. Fynn (CC BY-SA 3.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Bhutan_Power_Corporation_office_Thimphu.jpg',
  },
  {
    label: 'Bumthang Valley, Bhutan — Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/Category:Views_of_Bumthang',
  },
] as const;

export default ASSETS;
