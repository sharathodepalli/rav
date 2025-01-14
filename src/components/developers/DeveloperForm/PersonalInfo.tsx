import React from 'react';
import { Input } from '@/components/ui/Input';
import { FormSection } from '@/components/ui/FormSection';
import type { DeveloperFormValues } from './types';

interface PersonalInfoProps {
  values: Partial<DeveloperFormValues>;
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
        label="Full Name"
        name="fullName"
        required
        placeholder="John Doe"
        value={values.fullName}
        onChange={onChange}
        error={errors.fullName}
      />
      
      <Input
        label="Email"
        type="email"
        name="email"
        required
        placeholder="john@example.com"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      
      <Input
        label="LinkedIn Profile"
        type="url"
        name="linkedinUrl"
        placeholder="https://linkedin.com/in/johndoe"
        value={values.linkedinUrl}
        onChange={onChange}
        error={errors.linkedinUrl}
      />
      
      <Input
        label="Portfolio URL"
        type="url"
        name="portfolioUrl"
        placeholder="https://portfolio.dev/johndoe"
        value={values.portfolioUrl}
        onChange={onChange}
        error={errors.portfolioUrl}
      />
    </FormSection>
  );
}