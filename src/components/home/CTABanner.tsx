import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function CTABanner() {
  return (
    <section className="bg-primary-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our platform and connect with skilled developers to bring your vision to life.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/innovators">
              <Button variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/developers">
              <Button variant="outline" className="border-white text-white hover:bg-primary-700">
                Join as Developer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}