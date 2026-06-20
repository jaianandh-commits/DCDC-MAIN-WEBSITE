export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface LegacyStat {
  id: string;
  value: string;
  label: string;
  description: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'workshops' | 'events' | 'collaborations' | 'innovations';
  image: string;
  description: string;
  date: string;
}

export interface DomainInfo {
  id: string;
  title: string;
  description: string;
  skills: string[];
  activities: string[];
  exampleProjects: {
    name: string;
    desc: string;
  }[];
  color: string;
  glowColor: string;
}
