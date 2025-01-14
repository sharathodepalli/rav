export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  icon: string;
}