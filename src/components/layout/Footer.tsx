import React from "react";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";
import { ContactInfo } from "./ContactInfo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              The Shades
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Invoice & AP workflow automation delivered in 10 business days.
            </p>
            <div className="text-sm text-gray-500 border-t border-gray-800 pt-6">
              <p className="font-semibold text-gray-300 mb-3">
                Other capabilities:
              </p>
              <p className="leading-relaxed">
                Dashboards, integrations, web apps, automation for additional
                ops workflows.
              </p>
            </div>
          </div>
          <FooterLinks />
          <ContactInfo />
          <SocialLinks />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shades. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
