import React from 'react';
import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden px-2 pt-2 pb-3">
      <NavLinks vertical />
    </div>
  );
}