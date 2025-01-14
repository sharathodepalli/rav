import React from 'react';
import { FormSection } from '@/components/ui/FormSection';
import { SKILLS, SKILL_LEVELS, type DeveloperFormValues, type SkillLevel } from './types';

interface SkillsProficiencyProps {
  values: Partial<DeveloperFormValues>;
  onChange: (skill: string, level: SkillLevel) => void;
}

export function SkillsProficiency({ values, onChange }: SkillsProficiencyProps) {
  return (
    <FormSection
      title="Skills Proficiency"
      description="Rate your expertise in different technologies"
      icon="Code2"
    >
      <div className="space-y-4">
        {SKILLS.map((skill) => (
          <div key={skill} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {skill}
            </label>
            <div className="flex gap-4">
              {(Object.entries(SKILL_LEVELS) as [SkillLevel, string][]).map(([level, label]) => (
                <label key={level} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`skill-${skill}`}
                    value={level}
                    checked={values.skills?.find(s => s.name === skill)?.level === level}
                    onChange={() => onChange(skill, level)}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FormSection>
  );
}