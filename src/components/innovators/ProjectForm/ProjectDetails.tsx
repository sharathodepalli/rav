import React from 'react';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { Select } from '@/components/ui/Select';
import { FormSection } from './FormSection';
import { INDUSTRIES, PROJECT_STAGES, type ProjectFormValues } from './types';

interface ProjectDetailsProps {
  values: Partial<ProjectFormValues>;
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function ProjectDetails({ values, errors, onChange }: ProjectDetailsProps) {
  return (
    <FormSection
      title="Project Details"
      description="Tell us about your project"
      icon="Lightbulb"
    >
      <Input
      className="px-3 py-1"
        label="Project Title"
        name="projectTitle"
        required
        placeholder="Enter your project title"
        value={values.projectTitle}
        onChange={onChange}
        error={errors.projectTitle}
      />
      <TextArea
      className="px-3 py-1"
        label="Project Description"
        name="projectDescription"
        required
        placeholder="Describe your project, its goals, and potential impact..."
        value={values.projectDescription}
        onChange={onChange}
        error={errors.projectDescription}
        maxLength={500}
        rows={6}
      />
      <Input
      className="px-3 py-1"
        type="date"
        label="Expected Deadline"
        name="deadline"
        required
        min={new Date().toISOString().split('T')[0]}
        value={values.deadline}
        onChange={onChange}
        error={errors.deadline}
      />
      <Select
        className="px-3 py-1"
        label="Industry/Domain"
        name="industry"
        required
        options={INDUSTRIES}
        value={values.industry}
        onChange={onChange}
        error={errors.industry}
      />
      <Select
      className="px-3 py-1"
        label="Project Stage"
        name="projectStage"
        required
        options={PROJECT_STAGES}
        value={values.projectStage}
        onChange={onChange}
        error={errors.projectStage}
      />
      <Input
      className="px-3 py-1"
        type="number"
        label="Budget Estimate (USD)"
        name="budget"
        placeholder="Enter your estimated budget"
        value={values.budget}
        onChange={onChange}
        error={errors.budget}
      />
    </FormSection>
  );
}