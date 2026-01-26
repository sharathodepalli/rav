import React from "react";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  isDark?: boolean;
}

export function MobileMenu({ isOpen, isDark = false }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden px-2 pt-2 pb-3 ${isDark ? "bg-slate-900/95 backdrop-blur-sm" : ""}`}
    >
      <NavLinks vertical isDark={isDark} />
    </div>
  );
}
