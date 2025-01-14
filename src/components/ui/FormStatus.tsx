import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
  error?: string;
}

export function FormStatus({ status, error }: FormStatusProps) {
  if (status === 'idle') return null;

  return (
    <div
      className={`p-4 rounded-md ${
        status === 'success' ? 'bg-green-50' : 'bg-red-50'
      }`}
      role="alert"
    >
      <div className="flex items-center">
        {status === 'success' ? (
          <CheckCircle className="h-5 w-5 text-green-400" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-400" />
        )}
        <p
          className={`ml-3 text-sm ${
            status === 'success' ? 'text-green-800' : 'text-red-800'
          }`}
        >
          {status === 'success'
            ? 'Your application has been submitted successfully! We will review it and get back to you soon.'
            : error || 'Failed to submit form. Please try again later.'}
        </p>
      </div>
    </div>
  );
}