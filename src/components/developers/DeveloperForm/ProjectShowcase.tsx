import React from 'react';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { Button } from '@/components/ui/Button';
import { FormSection } from '@/components/ui/FormSection';
import { Plus, Trash2 } from 'lucide-react';
import type { ProjectShowcase as ProjectShowcaseType } from './types';

interface ProjectShowcaseProps {
  projects: ProjectShowcaseType[];
  onChange: (projects: ProjectShowcaseType[]) => void;
}

export function ProjectShowcase({ projects, onChange }: ProjectShowcaseProps) {
  const addProject = () => {
    onChange([...projects, { title: '', description: '', link: '' }]);
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof ProjectShowcaseType, value: string) => {
    const updatedProjects = projects.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    );
    onChange(updatedProjects);
  };

  return (
    <FormSection
      title="Project Showcase"
      description="Share your best work with us"
      icon="Folder"
    >
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium text-gray-900">Project {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            
            <Input
              label="Project Title"
              value={project.title}
              onChange={(e) => updateProject(index, 'title', e.target.value)}
              placeholder="e.g., E-commerce Platform"
            />
            
            <TextArea
              label="Description"
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              placeholder="Brief description of the project and your role..."
              rows={3}
            />
            
            <Input
              label="Project Link"
              type="url"
              value={project.link}
              onChange={(e) => updateProject(index, 'link', e.target.value)}
              placeholder="https://github.com/your-project"
            />
          </div>
        ))}
        
        <Button
          type="button"
          variant="outline"
          onClick={addProject}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>
    </FormSection>
  );
}