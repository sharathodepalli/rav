import React from 'react';
import * as Icons from 'lucide-react';

interface FormSectionProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  children: React.ReactNode;
}

export function FormSection({ title, description, icon, children }: FormSectionProps) {
  const Icon = Icons[icon];
  
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary-50 rounded-lg">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}