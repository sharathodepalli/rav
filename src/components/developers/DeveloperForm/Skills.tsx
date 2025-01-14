import React from 'react';
import { FormSection } from '@/components/ui/FormSection';
import { SKILLS, PREFERRED_ROLES, type DeveloperFormValues } from './types';

interface SkillsProps {
  values: Partial<DeveloperFormValues>;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Skills({ values, errors, onChange }: SkillsProps) {
  return (
    <FormSection
      title="Skills & Preferences"
      description="Select your technical skills and preferred roles"
      icon="Code2"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Technical Skills
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map((skill) => (
              <label key={skill} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={values.skills?.includes(skill)}
                  onChange={onChange}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{skill}</span>
              </label>
            ))}
          </div>
          {errors.skills && (
            <p className="text-sm text-red-600">{errors.skills}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Preferred Roles
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PREFERRED_ROLES.map((role) => (
              <label key={role.value} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="preferredRoles"
                  value={role.value}
                  checked={values.preferredRoles?.includes(role.value)}
                  onChange={onChange}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{role.label}</span>
              </label>
            ))}
          </div>
          {errors.preferredRoles && (
            <p className="text-sm text-red-600">{errors.preferredRoles}</p>
          )}
        </div>
      </div>
    </FormSection>
  );
}