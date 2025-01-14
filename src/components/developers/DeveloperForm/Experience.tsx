import React from 'react';
import { Select } from '@/components/ui/Select';
import { TextArea } from '@/components/ui/TextArea';
import { FormSection } from '@/components/ui/FormSection';
import { EXPERIENCE_LEVELS, type DeveloperFormValues } from './types';

interface ExperienceProps {
  values: Partial<DeveloperFormValues>;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export function Experience({ values, errors, onChange }: ExperienceProps) {
  return (
    <FormSection
      title="Experience"
      description="Tell us about your professional background"
      icon="Briefcase"
    >
      <Select
        label="Experience Level"
        name="experienceLevel"
        required
        options={EXPERIENCE_LEVELS}
        value={values.experienceLevel}
        onChange={onChange}
        error={errors.experienceLevel}
      />
      
      <TextArea
        label="Motivation"
        name="motivation"
        required
        placeholder="Tell us why you want to join our developer network..."
        value={values.motivation}
        onChange={onChange}
        error={errors.motivation}
        rows={4}
      />
    </FormSection>
  );
}