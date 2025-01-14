import React from 'react';
import { FooterLinks } from './FooterLinks';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RAV</h3>
            <p className="text-gray-400">Empowering Ideas, Building Solutions Together</p>
          </div>
          <FooterLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RAV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}