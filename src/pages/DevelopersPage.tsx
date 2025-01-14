import React from 'react';
import { DeveloperForm } from '@/components/developers/DeveloperForm';

export function DevelopersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Developer Network
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Be part of our growing community of skilled developers and work on exciting projects that make a difference.
          </p>
          <DeveloperForm />
        </div>
      </div>
    </div>
  );
}