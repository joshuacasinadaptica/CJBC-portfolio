export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Design';
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design' | 'Industrial' | 'Infrastructure' | 'Management';
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string; // Optional if you want to add issuer
  year?: string;
}
