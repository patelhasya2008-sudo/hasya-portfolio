import { Project, Skill, Certification, TimelineItem } from './types';

export const PERSONAL_INFO = {
  name: 'Hasya Patel',
  title: 'Full Stack Web Developer',
  subtitle: 'Computer Engineering Student',
  email: 'patelhasya2008@gmail.com',
  location: 'Gujarat, India',
  cgpa: '9.86',
  summary: 'A computer engineering student who builds premium, high-performance web applications. Focused on seamless user experiences, GenAI solutions, and robust systems architecture. Known for attention to detail, polished interfaces',
  github: 'https://github.com', // standard real github link
  linkedin: 'https://linkedin.com',
  resumeUrl: '#',
};

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Languages', level: 90, iconName: 'Flame' },
  { name: 'HTML', category: 'Web Technologies', level: 95, iconName: 'FileHtml' },
  { name: 'CSS', category: 'Web Technologies', level: 95, iconName: 'FileCss' },
  { name: 'JavaScript', category: 'Languages', level: 92, iconName: 'Code' },
  { name: 'TypeScript', category: 'Languages', level: 88, iconName: 'Code2' },
  { name: 'Database Management', category: 'Databases & Tools', level: 86, iconName: 'Database' },
  { name: 'Application Development', category: 'Web Technologies', level: 90, iconName: 'Atom' },
  { name: 'Tailwind CSS', category: 'Web Technologies', level: 95, iconName: 'Palette' },
  { name: 'Generative AI', category: 'Specialized', level: 85, iconName: 'Sparkles' },
  { name: 'Prompt Engineering', category: 'Specialized', level: 90, iconName: 'Terminal' },
  { name: 'Git & GitHub', category: 'Databases & Tools', level: 88, iconName: 'GitBranch' },
];

export const PROJECTS: Project[] = [
  {
    id: 'foodie-fleet',
    title: 'Foodie Fleet',
    description: 'An advanced, high-efficiency Food Delivery Management System built with React, Tailwind, and high-performance querying.',
    longDescription: 'Foodie Fleet is a comprehensive digital solution optimizing food delivery networks. Featuring dynamic driver dispatching, adaptive search parameters, and elegant user ordering pathways. The system addresses critical logistical latency points in delivery scheduling and state updates, resulting in an immersive consumer portal.',
    tags: ['React', 'TypeScript', 'Tailwind', 'MySQL / API', 'Motion Layout'],
    features: [
      'Interactive dashboard for tracking orders in real-time',
      'Advanced sorting and filtering based on distance, rating, and speed',
      'Secure mock checkout sequence with beautiful Apple-style payments interaction',
      'Driver route status tracking simulation and interactive delivery updates',
    ],
    role: 'Lead Developer',
    duration: 'Sep 2024 - Dec 2024',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    image: 'foodie_fleet',
    category: 'Full Stack App',
  },
  {
    id: 'healthcloud-pro',
    title: 'HealthCloud Pro',
    description: 'A cloud-enabled Healthcare Management & EHR Application simplifying patient workflows and doctor schedules.',
    longDescription: 'HealthCloud Pro redefines modern clinical administrative tasks. From patient onboarding to electronic health records (EHR) security and medical practitioners allocation, the app uses streamlined interface designs to reduce overhead, ensuring seamless healthcare monitoring and patient record storage.',
    tags: ['Next.js', 'React', 'Context API', 'Local Databases', 'Tailwind CSS'],
    features: [
      'Encrypted digital healthcare journal logs with instant document search',
      'Doctor appointment scheduler with automated slot verification systems',
      'Interactive medical history charts and digital vitals record tracking',
      'Fully responsive accessible designs meeting rigorous contrast checklists',
    ],
    role: 'Full Stack Developer',
    duration: 'Jan 2024 - Apr 2024',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    image: 'healthcloud_pro',
    category: 'Web App',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-google-genai',
    title: 'Google Cloud Generative AI',
    issuer: 'Google Cloud',
    date: 'Oct 2025',
    verificationUrl: 'file:///C:/Users/Tithi/Downloads/html/New%20folder/Hasya%20Certificate.pdf',
    downloadUrl: 'file:///C:/Users/Tithi/Downloads/html/New%20folder/Hasya%20Certificate.pdf',
    credentialId: 'GCC-GENAI-2025-F89X',
  },
  {
    id: 'cert-ms-prompt',
    title: 'Microsoft Prompt Engineering',
    issuer: 'Microsoft Corporation',
    date: 'Nov 2025',
    verificationUrl: 'file:///C:/Users/Tithi/Downloads/html/New%20folder/MicroSoft%20Hasya%20Certificate.pdf',
    downloadUrl: 'file:///C:/Users/Tithi/Downloads/html/New%20folder/MicroSoft%20Hasya%20Certificate.pdf',
    credentialId: 'MS-PROMPT-7762-YYX',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2023',
    title: 'Started Engineering Journey',
    subtitle: 'Diploma in Computer Engineering',
    description: 'Began the formal Computer Engineering curriculum. Developed primary strengths in data structures, systems analysis, algorithm design, and core programming paradigms.',
    iconName: 'GraduationCap',
  },
  {
    year: '2024',
    title: 'Built High-Scale Projects',
    subtitle: 'Full Stack Focus',
    description: 'Spearheaded and developed major projects including HealthCloud Pro and Foodie Fleet. Focused deeply on multi-user workflows, relational schema design, and client state orchestration.',
    iconName: 'Code',
  },
  {
    year: '2025',
    title: 'AI Certifications & Integration',
    subtitle: 'Frontiers of AI Space',
    description: 'Acquired prestigious industry certifications (Google Cloud Generative AI, Microsoft Prompt Engineering). Began integrating AI nodes and intelligent prompt workflows on top of classic state machines.',
    iconName: 'Sparkles',
  },
  {
    year: '2026',
    title: 'Graduation & Career Launch',
    subtitle: 'Next Phase of Innovation',
    description: 'Concluding terminal diploma semesters with a top 9.86 CGPA. Seeking professional full-time roles, internships, and research opportunities in state-of-the-art web systems and interfaces.',
    iconName: 'Award',
  },
];
