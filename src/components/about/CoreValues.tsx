import React from 'react';
import { Lightbulb, Users, Shield, Target } from 'lucide-react';

const VALUES = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies to solve complex challenges.',
    icon: Lightbulb
  },
  {
    title: 'Collaboration',
    description: 'Building strong partnerships between visionaries and technical experts.',
    icon: Users
  },
  {
    title: 'Integrity',
    description: 'Maintaining the highest standards of professional ethics and transparency.',
    icon: Shield
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional quality in every project we undertake.',
    icon: Target
  }
];

export function CoreValues() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map(({ title, description, icon: Icon }) => (
            <div key={title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}