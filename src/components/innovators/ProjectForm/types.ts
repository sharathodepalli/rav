export interface ProjectFormValues {
  // Personal Information
  fullName: string;
  email: string;
  
  // Project Details
  projectTitle: string;
  projectDescription: string;
  industry: string;
  projectStage: string;
  budget: string;
  deadline: string;
  
  // Requirements
  challenges: string[];
  requiredResources: string[];
  collaborationMode: string[];
  
  // Agreement
  confidentialityAgreement: boolean;
}

export const INDUSTRIES = [
  { value: '', label: 'Select Industry' },
  { value: 'healthtech', label: 'HealthTech' },
  { value: 'fintech', label: 'FinTech' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'education', label: 'Education' },
  { value: 'aiml', label: 'AI/ML' },
  { value: 'social', label: 'Social Impact' },
  { value: 'other', label: 'Other' }
];

export const PROJECT_STAGES = [
  { value: '', label: 'Select Stage' },
  { value: 'idea', label: 'Idea Stage' },
  { value: 'prototype', label: 'Prototype Built' },
  { value: 'mvp', label: 'Early MVP' },
  { value: 'growth', label: 'Growth Stage' }
];

export const COLLABORATION_MODES = [
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'onsite', label: 'On-Site' },
  { value: 'flexible', label: 'Flexible' }
];