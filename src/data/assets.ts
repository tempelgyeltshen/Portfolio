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
  carental3: '/assets/carental3.jpg',

  // Thangka Gallery & Painting
  thangpainting1: '/assets/Showroom%20ps%E0%BC%8B1@3x.webp',
  thangpainting2: '/assets/26.jpeg',
  thangpainting3: '/assets/30.jpeg',

  // High Quality Travelers
  travelers1: '/assets/travelers1.jpg',
  travelers2: '/assets/travelers2.jpg',
  travelers3: '/assets/travelers3.jpg',

  // Commercial & Food & Enterprise & Lounge
  trading1: '/assets/trading.jpeg',
  food247_1: '/assets/restaurant.jpeg',
  enterprise1: '/assets/image.png',
  hitokara1: '/assets/hitokora.jpg',
  hitokara2: '/assets/karokae.webp',

  // Leadership
  chairman_pema_tshering: '/assets/chairman_pema_tshering.png',
  ceo_pic: '/assets/ceo__2_-removebg-preview.png',

  // Core 5 Bhutan Operational Regions
  region_thimphu: '/assets/thimphu_region.jpg',
  region_paro: '/assets/region_paro.jpg',
  region_punakha: '/assets/region_punakha.png',
  region_bumthang: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Lhodrak_Karchu_Monastery%2C_Bumthang_2021-10-24a.jpg',
  region_gangtey: '/assets/gangtey_region.jpg',
} as const;

/** Attribution for the externally hosted, Creative Commons images above. */
export const EXTERNAL_IMAGE_CREDITS = [
  {
    label: 'Lhodrak Karchu Monastery, Bumthang — Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/File:Lhodrak_Karchu_Monastery,_Bumthang_2021-10-24a.jpg',
  },
] as const;

export default ASSETS;
