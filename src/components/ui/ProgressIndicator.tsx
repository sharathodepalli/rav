import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Step {
  title: string;
  completed: boolean;
  active: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
}

export function ProgressIndicator({ steps }: ProgressIndicatorProps) {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center',
                  step.completed && 'bg-primary-600 text-white',
                  step.active && !step.completed && 'border-2 border-primary-600',
                  !step.active && !step.completed && 'border-2 border-gray-300'
                )}
              >
                {step.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span className="text-xs mt-1">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-0.5',
                  step.completed ? 'bg-primary-600' : 'bg-gray-300'
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}