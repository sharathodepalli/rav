import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Logo />
          <NavLinks className="hidden md:flex" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
}