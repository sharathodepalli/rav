import { Hero } from "@/components/home/Hero";
import { HowItWorksNew } from "@/components/home/HowItWorksNew";
import { WhatWeAutomate } from "@/components/home/WhatWeAutomate";
import { TrustSection } from "@/components/home/TrustSection";
import { CTABanner } from "@/components/home/CTABanner";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <Hero />
        <HowItWorksNew />
        <WhatWeAutomate />
        <TrustSection />
        <CTABanner />
      </main>
    </div>
  );
}
