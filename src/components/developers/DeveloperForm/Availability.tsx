import React from 'react';
import { FormSection } from '@/components/ui/FormSection';
import { AVAILABILITY_OPTIONS, type DeveloperFormValues } from './types';

interface AvailabilityProps {
  values: Partial<DeveloperFormValues>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Availability({ values, onChange }: AvailabilityProps) {
  return (
    <FormSection
      title="Availability"
      description="Let us know your work preferences"
      icon="Calendar"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AVAILABILITY_OPTIONS.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
            <input
              type="checkbox"
              name="availability"
              value={option.value}
              checked={values.availability?.includes(option.value)}
              onChange={onChange}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </FormSection>
  );
}