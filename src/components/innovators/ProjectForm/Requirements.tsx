import React from 'react';
import { FormSection } from './FormSection';
import { COLLABORATION_MODES, type ProjectFormValues } from './types';

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

interface RequirementsProps {
  values: Partial<ProjectFormValues>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Requirements({ values, onChange }: RequirementsProps) {
  return (
    <FormSection
      title="Project Requirements"
      description="Select your project needs"
      icon="CheckSquare"
    >
      <div className="space-y-6">
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
                  onChange={onChange}
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
                  onChange={onChange}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{resource}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Preferred Collaboration Mode
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COLLABORATION_MODES.map((mode) => (
              <label key={mode.value} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="collaborationMode"
                  value={mode.value}
                  onChange={onChange}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{mode.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </FormSection>
  );
}