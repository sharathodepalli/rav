import React from 'react';
import { Input } from '@/components/ui/Input';
import { FormSection } from './FormSection';
import type { ProjectFormValues } from './types';

interface PersonalInfoProps {
  values: Partial<ProjectFormValues>;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PersonalInfo({ values, errors, onChange }: PersonalInfoProps) {
  return (
    <FormSection
      title="Personal Information"
      description="Tell us about yourself"
      icon="User"
    >
      <Input
      className="px-3 py-1"
        label="Full Name"
        name="fullName"
        required
        placeholder="Jane Smith"
        value={values.fullName}
        onChange={onChange}
        error={errors.fullName}
      />
      <Input
      className="px-3 py-1"
        label="Email"
        type="email"
        name="email"
        required
        placeholder="jane.smith@example.com"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
    </FormSection>
  );
}