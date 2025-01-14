import React from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { Map } from '@/components/contact/Map';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-500">
            Have questions or want to learn more about our services? We'd love to hear from you.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}