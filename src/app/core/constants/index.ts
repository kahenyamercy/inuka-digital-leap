export const SITE_CONFIG = {
  name: 'Inuka Digital Leap',
  shortName: 'Inuka',
  tagline: "Building Kenya's Digital Infrastructure Talent Pipeline",
  description: "A transformative initiative bridging Kenya's digital infrastructure skills gap through intensive training, mentorship, and employment pathways.",
  url: 'https://inukadigitalleap.jhubafrica.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', fragment: 'hero', path: '/' },
  { label: 'About', fragment: 'about', path: '/about' },
  { label: 'Program Pathway', fragment: 'pathway', path: '/pathway' },
  { label: 'Cohort', fragment: 'trainees', path: '/cohort' },
  { label: 'Activities', fragment: 'activities', path: '/activities' },
  { label: 'Stories', fragment: 'stories', path: '/stories' },
  { label: 'Impact', fragment: 'impact' },
  { label: 'Partners', fragment: 'partners', path: '/partners' },
  { label: 'Contact', fragment: 'contact', path: '/contact' },
] as const;

export const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Trainees Enrolled', icon: 'pi pi-users' },
  { value: 6, suffix: '', label: 'Month Pathway', icon: 'pi pi-calendar' },
  { value: 3, suffix: '', label: 'Technical Training', icon: 'pi pi-wrench' },
] as const;

export interface ImpactItem {
  label: string;
  value: number;
  target: number;
  unit: string;
  color: string;
}

export interface Story {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  slug: string;
}

export interface Activity {
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  date: string;
  duration: string;
  icon: string;
}

export interface Partner {
  name: string;
  slug: string;
  logo: string;
  alt: string;
  fullName: string;
  type: string;
  description: string;
  focus: string[];
  website: string;
}

export const STATISTICS: any[] = [];
export const TRAINEES: any[] = [];
export const PARTNERS: Partner[] = [];
export const STORIES: Story[] = [];
export const ACTIVITIES: Activity[] = [];
export const LEARNING_AREAS: any[] = [];
export const PATHWAY_STEPS: any[] = [];

export const IMPACT_DATA: { items: ImpactItem[] } = {
  items: [
    { label: 'Trainees Enrolled', value: 15, target: 15, unit: '', color: 'blue' },
    { label: 'Training Completion', value: 0, target: 100, unit: '%', color: 'green' },
    { label: 'Women in Tech', value: 42, target: 50, unit: '%', color: 'gold' },
    { label: 'Industry Placements', value: 0, target: 100, unit: '%', color: 'blue' },
    { label: 'Certifications Awarded', value: 0, target: 60, unit: '', color: 'green' },
    { label: 'Partner Counties', value: 0, target: 47, unit: '', color: 'gold' },
  ],
};

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
