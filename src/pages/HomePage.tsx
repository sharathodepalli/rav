import React from 'react';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { KeyFeatures } from '@/components/home/KeyFeatures';
import { SuccessStories } from '@/components/home/SuccessStories';
import { BlogPreview } from '@/components/home/BlogPreview';
import { CTABanner } from '@/components/home/CTABanner';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <SuccessStories />
      <BlogPreview />
      <CTABanner />
    </div>
  );
}