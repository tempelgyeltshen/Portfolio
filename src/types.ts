export interface CompanyItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  industry: string;
  description: string;
  fullStory: string;
  highlights: string[];
  image: string;
  gallery?: string[];
  location?: string;
  contactEmail?: string;
  tagline?: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  category: string;
}

export interface DzongkhagItem {
  id: string;
  name: string;
  region: 'Western' | 'Central' | 'Eastern' | 'Southern';
  description: string;
  isVerifiedLocation: boolean;
  servicesAvailable: string[];
  image: string;
  capitalOrTown: string;
}

export interface LeadershipPillar {
  title: string;
  description: string;
  icon: string;
}

export interface CorporateValue {
  title: string;
  shortDescription: string;
  detail: string;
}

export interface ThangkaArtItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  significance: string;
}
