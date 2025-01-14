import React from 'react';
import { Code2, Lightbulb, Users } from 'lucide-react';

const FEATURES = {
  innovators: [
    { title: 'Expert Matching', description: 'Find the perfect developers for your project' },
    { title: 'Project Management', description: 'Track progress and milestones effectively' },
    { title: 'Resource Planning', description: 'Optimize your development resources' }
  ],
  developers: [
    { title: 'Exciting Projects', description: 'Work on innovative and challenging projects' },
    { title: 'Flexible Work', description: 'Choose projects that match your schedule' },
    { title: 'Skill Growth', description: 'Enhance your expertise with diverse projects' }
  ],
  teams: [
    { title: 'Collaboration Tools', description: 'Streamline team communication and workflow' },
    { title: 'Quality Assurance', description: 'Maintain high standards across projects' },
    { title: 'Knowledge Sharing', description: 'Foster a culture of learning and growth' }
  ]
};

export function KeyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600">Tailored solutions for every role</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Lightbulb}
            title="For Innovators"
            features={FEATURES.innovators}
          />
          <FeatureCard
            icon={Code2}
            title="For Developers"
            features={FEATURES.developers}
          />
          <FeatureCard
            icon={Users}
            title="For Teams"
            features={FEATURES.teams}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  features: Array<{ title: string; description: string }>;
}

function FeatureCard({ icon: Icon, title, features }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 transition-transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-primary-600 mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature.title}>
              <h4 className="font-medium text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}