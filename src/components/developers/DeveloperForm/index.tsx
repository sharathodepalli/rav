import React from 'react';
import { PersonalInfo } from './PersonalInfo';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Button } from '@/components/ui/Button';
import { FormStatus } from '@/components/ui/FormStatus';
import { useEmailForm } from '@/hooks/useEmailForm';
import type { DeveloperFormValues } from './types';

export function DeveloperForm() {
  const { values, errors, isLoading, status, handleChange, handleSubmit } = useEmailForm<DeveloperFormValues>({
    formType: 'developer',
    initialValues: {
      fullName: '',
      email: '',
      experienceLevel: '',
      yearsOfExperience: 0,
      skills: [],
      preferredRoles: [],
      portfolioUrl: '',
      linkedinUrl: '',
      motivation: ''
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PersonalInfo values={values} errors={errors} onChange={handleChange} />
      <Experience values={values} errors={errors} onChange={handleChange} />
      <Skills values={values} errors={errors} onChange={handleChange} />
      
      <FormStatus status={status} error={errors.form} />

      <Button type="submit" isLoading={isLoading} className="w-full md:w-auto">
        Submit Application
      </Button>
    </form>
  );
}