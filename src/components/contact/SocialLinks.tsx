import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-primary-600 transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}