import React from "react";
import { Mission } from "@/components/about/Mission";
import { ImpactMetrics } from "@/components/about/ImpactMetrics";
import { CoreValues } from "@/components/about/CoreValues";
import { TeamSection } from "@/components/about/TeamSection";
import { Journey } from "@/components/about/Journey";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Mission />
      </div>
      <ImpactMetrics />
      <CoreValues />
      {/* <TeamSection /> */}
      <Journey />
      <WhyChooseUs />
    </div>
  );
}
