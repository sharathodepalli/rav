import React from 'react';
import { Link } from 'react-router-dom';

export function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/developers" className="text-gray-400 hover:text-white">
            For Developers
          </Link>
        </li>
        <li>
          <Link to="/innovators" className="text-gray-400 hover:text-white">
            For Innovators
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-400 hover:text-white">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}