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
  thangpainting1: '/assets/_E2A9915.JPG',
  thangpainting2: '/assets/_E2A0196.JPG',
  thangpainting3: '/assets/_E2A0245.JPG',

  // High Quality Travelers
  travelers1: '/assets/travelers1.jpg',
  travelers2: '/assets/travelers2.jpg',
  travelers3: '/assets/travelers3.jpg',

  // Commercial & Food & Enterprise & Lounge
  trading1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thimphu_handicraft_market_-_Bhutan.jpg',
  food247_1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutanese_food.jpg',
  enterprise1: '/assets/image.png',
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
    label: 'Thimphu handicraft market — Prof Ranga Sai (CC BY-SA 4.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Thimphu_handicraft_market_-_Bhutan.jpg',
  },
  {
    label: 'Bhutanese food — Antonio Morales García (CC BY-SA 2.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Bhutanese_food.jpg',
  },
  {
    label: 'Bumthang Valley, Bhutan — Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/Category:Views_of_Bumthang',
  },
] as const;

export default ASSETS;
