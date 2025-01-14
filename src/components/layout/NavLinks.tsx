import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface NavLinksProps {
  className?: string;
  vertical?: boolean;
}

export function NavLinks({ className, vertical = false }: NavLinksProps) {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Developers', href: '/developers' },
    { label: 'Innovators', href: '/innovators' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className={cn('items-center', vertical ? 'space-y-2' : 'space-x-8', className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            'text-gray-600 hover:text-primary-600 transition-colors',
            vertical && 'block px-3 py-2'
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}