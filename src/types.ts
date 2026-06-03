export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Web Technologies' | 'Databases & Tools' | 'Specialized';
  level: number; // 0 to 100 for percentage bar
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  downloadUrl: string;
  credentialId?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
