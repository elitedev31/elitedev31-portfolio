export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TimelineItem {
  id: number;
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

export interface SkillCategory {
  icon: React.ReactNode;
  name: string;
  skills: string[];
  color: string;
}