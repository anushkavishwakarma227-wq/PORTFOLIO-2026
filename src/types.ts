export interface Skill {
  id: string;
  name: string;
  category: 'ai' | 'hardware' | 'software' | 'tools';
  index: string;
  iconName: string;
  level?: string;
  description?: string;
}

export interface Project {
  id: string;
  number: string;
  category: string;
  domain: 'hardware' | 'mechatronics' | 'robotics' | 'ai' | 'web';
  status: 'OPERATIONAL' | 'CALIBRATED' | 'TUNED' | 'RESEARCH PROTOTYPE' | 'PRODUCTION';
  statusColor: 'tertiary' | 'secondary';
  title: string;
  description: string;
  tags: string[];
  fullDetails?: {
    overview: string;
    keyHighlights: string[];
    hardwareStack?: string[];
    softwareStack?: string[];
    architectureFlow?: string[];
    githubUrl?: string;
  };
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description: string;
  location: string;
  badge?: string;
  isCurrent?: boolean;
}

export interface ExperienceItem {
  id: string;
  roleType: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  isLeadership?: boolean;
}
