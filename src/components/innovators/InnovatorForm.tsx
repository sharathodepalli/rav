import React from 'react';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/Button';
import { useForm } from '@/hooks/useForm';

const CHALLENGES = [
  'Technical Feasibility',
  'Market Research',
  'Resource Planning',
  'MVP Development',
  'Scaling Strategy'
];

const RESOURCES = [
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'UI/UX Design',
  'DevOps',
  'Project Management'
];

export function InnovatorForm() {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      fullName: '',
      email: '',
      projectTitle: '',
      projectDescription: '',
      challenges: [],
      requiredResources: []
    },
    onSubmit: async (values) => {
      const projects = JSON.parse(localStorage.getItem('projects') || '[]');
      projects.push({ ...values, id: Date.now() });
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <Input
        label="Full Name"
        name="fullName"
        required
        placeholder="Jane Smith"
        value={values.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        required
        placeholder="jane.smith@example.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Project Title"
        name="projectTitle"
        required
        placeholder="Enter your project title"
        value={values.projectTitle}
        onChange={handleChange}
        error={errors.projectTitle}
      />
      <TextArea
        label="Project Description"
        name="projectDescription"
        required
        placeholder="Describe your project, its goals, and potential impact..."
        value={values.projectDescription}
        onChange={handleChange}
        error={errors.projectDescription}
        maxLength={500}
        rows={6}
      />
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Current Challenges
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHALLENGES.map((challenge) => (
              <label key={challenge} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="challenges"
                  value={challenge}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{challenge}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Required Resources
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESOURCES.map((resource) => (
              <label key={resource} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="requiredResources"
                  value={resource}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{resource}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <Button type="submit" isLoading={isLoading} className="w-full md:w-auto">
        Submit Project
      </Button>
    </form>
  );
}