import React from 'react';
import { Button } from '@/components/ui/Button';
import { FormStatus } from '@/components/ui/FormStatus';
import { PersonalInfo } from './PersonalInfo';
import { ProjectDetails } from './ProjectDetails';
import { Requirements } from './Requirements';
import { useEmailForm } from '@/hooks/useEmailForm';
import type { ProjectFormValues } from './types';

export function ProjectForm() {
  const { values, errors, isLoading, status, handleChange, handleSubmit } = useEmailForm<ProjectFormValues>({
    formType: 'innovator',
    initialValues: {
      fullName: '',
      email: '',
      projectTitle: '',
      projectDescription: '',
      industry: '',
      projectStage: '',
      budget: '',
      deadline: '',
      challenges: [],
      requiredResources: [],
      collaborationMode: [],
      confidentialityAgreement: false
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <PersonalInfo values={values} errors={errors} onChange={handleChange} />
      <ProjectDetails values={values} errors={errors} onChange={handleChange} />
      <Requirements values={values} onChange={handleChange} />

      <div className="flex items-center space-x-2 p-6 bg-white rounded-lg shadow-sm">
        <input
          type="checkbox"
          id="confidentialityAgreement"
          name="confidentialityAgreement"
          required
          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          onChange={handleChange}
        />
        <label htmlFor="confidentialityAgreement" className="text-sm text-gray-700">
          I agree to the <a href="#" className="text-primary-600 hover:text-primary-500">confidentiality agreement</a> and <a href="#" className="text-primary-600 hover:text-primary-500">privacy policy</a>
        </label>
      </div>

      <FormStatus status={status} error={errors.form} />

      <Button type="submit" isLoading={isLoading} className="w-full md:w-auto">
        Submit Project
      </Button>
    </form>
  );
}