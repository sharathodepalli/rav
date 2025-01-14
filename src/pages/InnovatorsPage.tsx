import React from 'react';
import { ProjectForm } from '@/components/innovators/ProjectForm';

export function InnovatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Submit Your Project
          </h1>
          <p className="text-lg text-gray-600">
            Share your innovative idea with us, and we'll help you bring it to life with our network of skilled developers.
          </p>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}