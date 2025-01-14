import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <Github className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}