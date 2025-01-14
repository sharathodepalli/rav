export interface DeveloperFormValues {
  fullName: string;
  email: string;
  linkedinUrl: string;
  portfolioUrl: string;
  experienceLevel: string;
  yearsOfExperience: number;
  skills: string[];
  preferredRoles: string[];
  motivation: string;
}

export const EXPERIENCE_LEVELS = [
  { value: '', label: 'Select your experience level' },
  { value: 'junior', label: 'Junior (0-2 years)' },
  { value: 'mid', label: 'Mid-Level (3-5 years)' },
  { value: 'senior', label: 'Senior (6+ years)' }
];

export const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'DevOps',
  'Cloud',
  'Mobile',
  'UI/UX'
];

export const PREFERRED_ROLES = [
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'backend', label: 'Backend Developer' },
  { value: 'fullstack', label: 'Full Stack Developer' },
  { value: 'mobile', label: 'Mobile Developer' },
  { value: 'devops', label: 'DevOps Engineer' },
  { value: 'architect', label: 'Solution Architect' }
];