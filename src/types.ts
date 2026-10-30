export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cs' | 'tools' | 'concepts';
  status: 'current' | 'learning';
  icon: string;
  description: string;
  highlight?: boolean;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrototype?: boolean;
  type: 'railway' | 'analytics';
}

export interface RoadmapStage {
  stageNumber: string;
  title: string;
  subtitle: string;
  status: 'COMPLETED' | 'IN PROGRESS' | 'LEARNING' | 'PLANNED';
  description: string;
  skills: string[];
  keyMilestones: string[];
}
