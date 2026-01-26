import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { useLocation } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage
          ? "bg-slate-900/60 backdrop-blur-md border-b border-white/10"
          : "bg-white shadow-md"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo isDark={isHomePage} />
          <NavLinks className="hidden md:flex" isDark={isHomePage} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              isHomePage
                ? "text-white hover:text-gray-200"
                : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} isDark={isHomePage} />
    </nav>
  );
}
