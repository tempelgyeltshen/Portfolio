import { CompanyItem, DestinationItem, DzongkhagItem, LeadershipPillar, CorporateValue, ThangkaArtItem } from '../types';
import { ASSETS } from './assets';

export const CHAIRMAN_INFO = {
  name: 'Mr. Pema Tshering',
  title: 'Chairman',
  company: 'High Quality Pvt. Ltd.',
  email: 'pemsbumthap@gmail.com',
  phone: '+975 17377777',
  website: 'www.bhutanlhtours.com',
  webUrl: 'http://www.bhutanlhtours.com',
  portraitImage: ASSETS.chairman_pema_tshering,
  portraitAlt: 'Mr. Pema Tshering, Chairman of High Quality Pvt. Ltd.',
  shortPhilosophy: 'Sustainable business is about creating opportunities, developing people, building trusted relationships, and contributing meaningfully to Bhutan\'s economic development.',
  fullMessage: [
    'As the Chairman of High Quality Pvt. Ltd., I believe that sustainable business is about more than commercial success. It is about creating opportunities, developing people, building trusted relationships, and contributing meaningfully to Bhutan\'s economic development.',
    'Over the years, our business interests have grown into a diversified group serving different sectors, from tourism and transportation to traditional arts, enterprise services, food and hospitality, and entertainment.',
    'Each business within the High Quality Group has its own area of expertise, yet they are connected by a common philosophy: quality, professionalism, integrity, innovation, and service excellence.',
    'Our approach is centered on understanding our customers, responding to changing market needs, and building relationships that extend beyond individual transactions. We value long-term partnerships with clients, suppliers, employees, institutions, and business partners both within Bhutan and internationally.',
    'As a Bhutanese business group, we are also proud of the opportunity to showcase the country\'s culture, hospitality, creativity, and entrepreneurial spirit to the world.',
    'Our journey continues with a commitment to responsible growth, continuous improvement, and the creation of businesses that can generate lasting value for Bhutan and its people.'
  ],
  closingQuote: 'Creating opportunities, delivering excellence, and building lasting partnerships.',
  closingStatement: [
    'For us, business is a journey of continuous improvement. We believe in creating opportunities where people, ideas, and businesses can grow together. We believe in delivering excellence through professionalism and attention to detail. And we believe that the strongest businesses are built on relationships that last.',
    'From tourism and traditional arts to enterprise, transportation, food, trading, and entertainment, every company within the High Quality Group represents another step in our journey toward building a stronger and more diversified Bhutanese business presence.',
    'Our ambition is not simply to grow businesses. It is to build businesses that matter. Businesses that create employment, develop talent, support local enterprise, connect Bhutan with the international community, preserve and promote our culture, and leave behind lasting value.',
    'As we look toward the future, we welcome clients, partners, investors, suppliers, institutions, and entrepreneurs who share our belief in responsible growth and meaningful collaboration.'
  ]
};

export const PRESIDENT_INFO = {
  name: 'Mr. Pema Tshering',
  title: 'President & CEO',
  company: 'High Quality Pvt. Ltd.',
  portraitImage: ASSETS.ceo_pic,
  portraitAlt: 'Mr. Pema Tshering, President & CEO of High Quality Pvt. Ltd.',
  shortPhilosophy: "My role as President & CEO is to ensure every company within the High Quality Group creates real opportunities — developing people, building trusted partnerships, and contributing meaningfully to Bhutan's economic growth.",
};

export const LEADERSHIP_PHILOSOPHY: LeadershipPillar[] = [
  {
    title: 'Integrity',
    description: 'Operating with unwavering honesty, transparency, and ethical standards across all commercial transactions.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Innovation',
    description: 'Continuously refining operations, adopting appropriate technologies, and anticipating market evolution.',
    icon: 'Lightbulb'
  },
  {
    title: 'Excellence',
    description: 'Setting high standards in product quality, service delivery, and professional operational execution.',
    icon: 'Award'
  },
  {
    title: 'Partnership',
    description: 'Cultivating enduring, mutually beneficial relationships with clients, institutions, and global partners.',
    icon: 'Handshake'
  }
];

export const GROUP_COMPANIES: CompanyItem[] = [
  {
    id: 'travelers',
    number: '01',
    name: 'High Quality Travelers',
    subtitle: 'Discover Bhutan. Experience It Personally.',
    industry: 'Destination Management & Luxury Tourism',
    description: 'Represents the group\'s tourism interests, creating bespoke, culturally enriching, and immersive journeys across Bhutan\'s pristine landscapes.',
    fullStory: 'High Quality Travelers caters to discerning travelers seeking more than a conventional holiday. With experiences centered around Bhutan\'s culture, pristine mountain landscapes, spiritual heritage, adventure, and warm hospitality, the company crafts tailor-made journeys that allow guests to connect deeply with the Kingdom.',
    highlights: [
      'Luxury Bhutan Journeys & Bespoke Travel',
      'Cultural & Spiritual Heritage Tours',
      'Adventure Exploration & Himalayan Trekking',
      'MICE (Meetings, Incentives, Conferences, Events)',
      'Nature & Wildlife Conservation Expeditions',
      'Personalized Curated Itineraries'
    ],
    image: ASSETS.travelers1,
    gallery: [
      ASSETS.travelers1,
      ASSETS.travelers2,
      ASSETS.travelers3
    ],
    location: 'Thimphu, Bhutan (Servicing All Regions)',
    contactEmail: 'pemsbumthap@gmail.com',
    tagline: 'Elevating Bhutanese Hospitality to Global Luxury Standards'
  },
  {
    id: 'thangka',
    number: '02',
    name: 'High Quality Thangka Painting',
    subtitle: 'Preserving Bhutanese Artistic Heritage',
    industry: 'Traditional Arts & Cultural Masterpieces',
    description: 'Dedicated to preserving, promoting, and showcasing sacred Himalayan Thangka scroll artwork and traditional Bhutanese master craftsmanship.',
    fullStory: 'Thangka painting is deeply connected with Himalayan Buddhist artistic traditions, requiring years of disciplined apprenticeship, mineral pigments, gold leafing, and precise iconographic geometry. High Quality Thangka Painting brings authentic Bhutanese sacred artwork to art collectors, spiritual seekers, and international visitors.',
    highlights: [
      'Authentic Sacred Thangka Scroll Paintings',
      'Master Artisan Collaboration & Fine Craftsmanship',
      'Preservation of Himalayan Sacred Geometry',
      'Promoted presence in key hubs: Thimphu, Paro, Lobesa, Gangtey, Bumthang',
      'Support for Bhutan\'s Creative & Cultural Economy'
    ],
    image: ASSETS.thangpainting1,
    gallery: [
      ASSETS.thangpainting1,
      ASSETS.thangpainting2,
      ASSETS.thangpainting3
    ],
    location: 'Thimphu, Paro, Lobesa, Gangtey, Bumthang',
    tagline: 'A Sacred Bridge Between Heritage and Fine Art'
  },
  {
    id: 'trading',
    number: '03',
    name: 'High Quality Trading',
    subtitle: 'Connecting Products, Markets and Opportunities',
    industry: 'Commercial Sourcing & Distribution',
    description: 'Forms part of the group\'s commercial interests, structured around reliable product sourcing, professional supply chain management, and long-term business partnerships.',
    fullStory: 'High Quality Trading provides dependable product flow and commercial bridge capabilities within Bhutan and across regional trade connections. Guided by transparency, responsiveness, and supply consistency, the business supports various industries with verified product lines.',
    highlights: [
      'Reliable Product Sourcing & Quality Control',
      'Professional Service & Transparent Logistics',
      'Long-Term Commercial Partner Network',
      'Commercial Bridge for B2B Supply Requirements'
    ],
    image: ASSETS.trading1,
    location: 'Thimphu, Bhutan',
    tagline: 'Dependable Commercial Bridge and Supply Excellence'
  },
  {
    id: 'car-rental',
    number: '04',
    name: 'High Quality Car Rental',
    subtitle: 'Mobility You Can Depend On',
    industry: 'Transportation & Chauffeur Services',
    description: 'Delivers reliable, high-standard vehicular mobility supporting tourism, institutional clients, corporate delegations, and local travel requirements across Bhutan.',
    fullStory: 'Navigating Bhutan\'s mountain highways requires dependable vehicles and experienced drivers. High Quality Car Rental offers well-maintained fleets and professional chauffeur services under the leadership of President Pema Tshering, ensuring seamless travel across the country.',
    highlights: [
      'Chauffeur-Driven Executive & Visitor Travel',
      'Airport Transfers (Paro Airport to All Districts)',
      'Corporate & Delegation Transportation',
      'Customized Long-Distance Travel Logistics',
      'Headquartered in Thimphu, Servicing Nationwide'
    ],
    image: ASSETS.carental1,
    gallery: [
      ASSETS.carental1,
      ASSETS.carental2,
      ASSETS.carental3
    ],
    location: 'Thimphu, Bhutan',
    tagline: 'Safety, Comfort, and Dependability on Bhutan Highways'
  },
  {
    id: 'food-247',
    number: '05',
    name: 'High Quality 24/7',
    subtitle: 'Quality Food. Reliable Service.',
    industry: 'Food Service & Convenience Hospitality',
    description: 'Serves daily culinary and convenience needs with an unwavering emphasis on hygiene, consistency, taste, and responsive customer-centric operations.',
    fullStory: 'High Quality 24/7 satisfies everyday consumer expectations for high-standard food service. Built around operational cleanliness, quality ingredients, and welcoming hospitality, the venture sets a benchmark for accessible culinary reliability.',
    highlights: [
      'Clean, Hygienic Operational Standards',
      'Consistent Taste & Quality Ingredients',
      'Customer-Friendly & Convenient Service Culture',
      'Reliable Availability for Everyday Customer Needs'
    ],
    image: ASSETS.food247_1,
    location: 'Thimphu, Bhutan',
    tagline: 'Consistency, Hygiene, and Everyday Quality Food'
  },
  {
    id: 'enterprise',
    number: '06',
    name: 'High Quality Enterprise',
    subtitle: 'Business Solutions Built Around Opportunity',
    industry: 'Commercial Development & Enterprise Solutions',
    description: 'Serves as the group\'s broader enterprise development platform, identifying high-potential commercial ventures and fostering institutional relationships.',
    fullStory: 'High Quality Enterprise expands the group\'s economic footprint beyond traditional sectors. Under the presidency of Mr. Pema Tshering, the enterprise focuses on sustainable value creation, responsible commercial investments, and strategic growth opportunities.',
    highlights: [
      'Opportunity Identification & Venture Structuring',
      'Institutional & Corporate Relationship Building',
      'Professional Business Support & Consultation',
      'Long-Term Value Creation Strategy'
    ],
    image: ASSETS.enterprise1,
    location: 'Thimphu, Bhutan',
    contactEmail: 'pemsbumthap@gmail.com',
    tagline: 'Strategic Innovation and Commercial Expansion'
  },
  {
    id: 'hitokara',
    number: '07',
    name: 'Hitokara',
    subtitle: 'Entertainment, Music & Social Experiences',
    industry: 'Hospitality, Lounge & Nightlife',
    description: 'Thimphu\'s premier social venue, Hitokara Lounge & Bar provides a sophisticated atmosphere, fine beverages, music, and interactive karaoke entertainment.',
    fullStory: 'Located in the capital city of Thimphu, Hitokara Lounge & Bar offers locals, professionals, and international travelers a vibrant venue to unwind, celebrate, and connect over music, lounge hospitality, and high-quality social experiences.',
    highlights: [
      'Hitokara Lounge & Bar in Thimphu',
      'Interactive Private & Open Karaoke Entertainment',
      'Warm Ambient Lighting & Premium Beverage Lounge',
      'Relaxed Hospitality for Social Celebrations & Networking'
    ],
    image: ASSETS.hitokara1,
    gallery: [
      ASSETS.hitokara1,
      ASSETS.hitokara2
    ],
    location: 'Thimphu, Bhutan',
    tagline: 'Where Music, Hospitality, and Vibrant Social Life Meet'
  }
];

export const KEY_DESTINATIONS: DestinationItem[] = [
  {
    id: 'thimphu',
    name: 'THIMPHU',
    title: 'Main Capital & Business Center',
    description: 'Bhutan\'s main capital and primary business center, serving as the group headquarters and administrative heart, combining modern commerce, governance, and cultural heritage.',
    image: ASSETS.region_thimphu,
    highlights: ['Main Capital & Business Center', 'Tashichho Dzong & Government Seats', 'Buddha Dordenma Statue', 'National Memorial Chorten'],
    category: 'Main Capital & Business Center'
  },
  {
    id: 'paro',
    name: 'PARO',
    title: 'Sacred Gateway & International Airport',
    description: 'Home to Bhutan\'s international airport and one of the country\'s most recognized cultural landscapes, featuring Paro Taktsang (Tiger\'s Nest) and historic dzongs.',
    image: ASSETS.region_paro,
    highlights: ['Paro Taktsang (Tiger\'s Nest)', 'Paro International Airport Gateway', 'Rinpung Dzong', 'National Museum of Bhutan'],
    category: 'Sacred Gateway & Airport'
  },
  {
    id: 'punakha',
    name: 'PUNAKHA',
    title: 'Historic Ancient Capital & Fertile Valley',
    description: 'Renowned for the majestic Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers, subtropical valleys, and ancient royal heritage.',
    image: ASSETS.region_punakha,
    highlights: ['Punakha Dzong', 'Pho Chhu & Mo Chhu River Confluence', 'Historic Suspension Bridge', 'Chimi Lhakhang'],
    category: 'Historic Valley'
  },
  {
    id: 'bumthang',
    name: 'BUMTHANG',
    title: 'Spiritual Heartland & Sacred Temples',
    description: 'One of Bhutan\'s most culturally and spiritually significant regions, Bumthang is home to ancient temples, monasteries, sacred sites, and traditional artisans.',
    image: ASSETS.region_bumthang,
    highlights: ['Jambay Lhakhang', 'Kurjey Lhakhang', 'Mebar Tsho (Burning Lake)', 'Traditional Weaving & Cheese Artisans'],
    category: 'Spiritual Heart'
  },
  {
    id: 'gangtey',
    name: 'GANGTEY (PHOBJIKHA VALLEY)',
    title: 'Glacial Sanctuary & Conservation Area',
    description: 'Located in the Phobjikha Valley, Gangtey is famous for its dramatic glacial landscape, Gangtey Monastery, scenic nature trails, and the sanctuary for rare black-necked cranes.',
    image: ASSETS.region_gangtey,
    highlights: ['Gangtey Monastery', 'Phobjikha Glacial Valley', 'Black-Necked Crane Sanctuary', 'Scenic High-Altitude Trails'],
    category: 'Glacial Sanctuary'
  }
];

export const BHUTAN_20_DZONGKHAGS: DzongkhagItem[] = [
  { id: 'thimphu', name: 'Thimphu', region: 'Western', capitalOrTown: 'Thimphu — Main Capital & Business Center', isVerifiedLocation: true, servicesAvailable: ['High Quality Group HQ', 'High Quality Travelers', 'Thangka Painting Gallery', 'Car Rental Fleet', 'Enterprise HQ', 'Hitokara Lounge', 'High Quality 24/7'], image: ASSETS.region_thimphu, description: 'Main capital district & central business hub housing government, group corporate headquarters, and commercial operations.' },
  { id: 'paro', name: 'Paro', region: 'Western', capitalOrTown: 'Paro Town', isVerifiedLocation: true, servicesAvailable: ['High Quality Travelers Airport Service', 'Thangka Gallery', 'Chauffeur Transfers'], image: ASSETS.region_paro, description: 'Gateway to Bhutan, renowned for Taktsang Monastery, Paro Airport, and scenic valley landscapes.' },
  { id: 'punakha', name: 'Punakha', region: 'Western', capitalOrTown: 'Punakha / Lobesa', isVerifiedLocation: true, servicesAvailable: ['High Quality Travelers Circuit', 'Thangka Exhibition (Lobesa)', 'Cultural Tours'], image: ASSETS.region_punakha, description: 'Historic ancient capital famous for Punakha Dzong and subtropical fertile river valleys.' },
  { id: 'bumthang', name: 'Bumthang', region: 'Central', capitalOrTown: 'Jakar', isVerifiedLocation: true, servicesAvailable: ['High Quality Travelers Heritage Circuit', 'Thangka Art Center', 'Bespoke Overland Journeys'], image: ASSETS.region_bumthang, description: 'Spiritual heartland containing Bhutan\'s oldest sacred temples and legendary valley heritage.' },
  { id: 'gangtey', name: 'Gangtey (Phobjikha Valley)', region: 'Western', capitalOrTown: 'Gangtey / Phobjikha', isVerifiedLocation: true, servicesAvailable: ['Gangtey Tourism Circuit', 'Thangka Art Display', 'Trekking Routes'], image: ASSETS.region_gangtey, description: 'Home to Gangtey Monastery and Phobjikha glacial valley habitat for rare black-necked cranes.' }
];

export const CORPORATE_VALUES: CorporateValue[] = [
  {
    title: 'INTEGRITY',
    shortDescription: 'Unwavering transparency and ethical accountability in all interactions.',
    detail: 'We build relationships based on truthfulness, keeping commitments, and honoring institutional trust.'
  },
  {
    title: 'EXCELLENCE',
    shortDescription: 'Relentless commitment to superior quality and precise service execution.',
    detail: 'We hold every business in our portfolio to stringent quality standards, striving for flawlessness in client service.'
  },
  {
    title: 'INNOVATION',
    shortDescription: 'Embracing creative solutions and continuous operational evolution.',
    detail: 'We adapt modern management practices and digital workflows while maintaining reverence for Bhutanese traditions.'
  },
  {
    title: 'PARTNERSHIP',
    shortDescription: 'Fostering long-term, mutually beneficial commercial ecosystems.',
    detail: 'We view clients, employees, and global collaborators as long-term allies in sustainable development.'
  },
  {
    title: 'RESPONSIBILITY',
    shortDescription: 'Conducting business with social, cultural, and environmental care.',
    detail: 'We align our commercial goals with Bhutan\'s Gross National Happiness ethos and sustainable growth principles.'
  },
  {
    title: 'GROWTH',
    shortDescription: 'Creating durable, generational value for Bhutan and stakeholders.',
    detail: 'We focus on sustainable multi-sector expansion that generates meaningful employment and economic vitality.'
  }
];

export const WHY_WORK_WITH_US = [
  {
    number: '01',
    title: 'Diversified Experience',
    description: 'Our businesses operate across multiple sectors, giving the group a broad understanding of customers, markets, and commercial requirements.'
  },
  {
    number: '02',
    title: 'Bhutanese Roots',
    description: 'We are proud to build businesses from Bhutan while creating connections with customers and partners beyond the country.'
  },
  {
    number: '03',
    title: 'Customer-Centered Service',
    description: 'Every business within the group is guided by the importance of understanding customers and delivering dependable service.'
  },
  {
    number: '04',
    title: 'Long-Term Partnerships',
    description: 'We believe sustainable business is built through trust, communication, reliability, and mutually beneficial relationships.'
  },
  {
    number: '05',
    title: 'Professional Management',
    description: 'We strive to maintain professional standards across our businesses while continuously improving our operations and services.'
  },
  {
    number: '06',
    title: 'Culture & Identity',
    description: 'Our tourism and traditional-art activities provide opportunities to share Bhutan\'s culture, heritage, and identity with the world.'
  },
  {
    number: '07',
    title: 'Continuous Development',
    description: 'We remain open to new ideas, technologies, partnerships, and opportunities that can strengthen our businesses and contribute to sustainable growth.'
  }
];

export const THANGKA_ARTWORKS: ThangkaArtItem[] = [
  {
    id: 'medicine-buddha',
    title: 'High Quality Thangka Painting Gallery',
    category: 'Gallery Interior',
    description: 'Interior view of High Quality Thangka Painting, displaying framed Buddhist mandalas, traditional paintings, and craftwork.',
    image: ASSETS.thangpainting1,
    significance: 'A view of the company gallery and its collection of traditional Buddhist art.'
  },
  {
    id: 'padmasambhava',
    title: 'Hand-Painted Buddhist Mandala',
    category: 'Traditional Mandala Art',
    description: 'A hand-painted circular Buddhist mandala with concentric geometric forms, Tibetan script, and traditional symbolic details.',
    image: ASSETS.thangpainting2,
    significance: 'A contemporary artwork from the High Quality Thangka Painting collection.'
  },
  {
    id: 'wheel-of-life',
    title: 'Traditional Buddhist Symbolic Painting',
    category: 'Traditional Buddhist Art',
    description: 'A hand-painted Buddhist composition featuring a central circular emblem, Tibetan script, animal figures, and richly detailed borders.',
    image: ASSETS.thangpainting3,
    significance: 'A contemporary artwork from the High Quality Thangka Painting collection.'
  }
];
