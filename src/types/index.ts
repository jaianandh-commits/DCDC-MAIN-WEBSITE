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

// Events
export type EventCategory = 'Technical' | 'Projects' | 'Outreach' | 'Innovation' | 'Technical Workshop' | 'Club Bonding';

export interface EventItem {
  id: string;
  title: string;
  month: string;
  week: string;
  description: string;
  details: string;
  category: EventCategory;
  tags: string[];
  registrationStatus: 'open' | 'closed' | 'soon';
  registeredCount: number;
  maxCapacity: number;
  location: string;
  time: string;
  speaker?: string;
}

export interface Registration {
  id: string;
  eventId: string;
  name: string;
  email: string;
  role: string;
  registeredAt: string;
}

export interface Comment {
  id: string;
  eventId: string;
  author: string;
  text: string;
  timestamp: string;
}

// Team
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  collageImage?: string;
  category: 'Leadership' | 'Engineering' | 'Marketing' | 'Customer Success';
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
  email: string;
  location: string;
  experience: string;
  skills: string[];
}

// Gallery (feature)
export interface EventImage {
  id: string;
  url: string;
  alt: string;
  tag: string; // e.g. "DCDC • SRMIST", "GPS Map Camera"
  description: string;
}

export interface EventSection {
  id: string;
  title: string;
  subtitle: string;
  images: EventImage[];
}

// Contact
export interface MessageSubmission {
  id: string;
  fullName: string;
  deptYear: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  type: 'enquiry' | 'join';
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
}
