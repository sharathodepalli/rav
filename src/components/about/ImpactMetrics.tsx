import React from "react";
import { Users, Briefcase, Award, TrendingUp, Globe } from "lucide-react";
import { ImpactCounter } from "./ImpactCounter";

const METRICS = [
  {
    label: "Projects Delivered",
    value: 6,
    icon: Briefcase,
    description: "Successful innovations launched globally",
  },
  {
    label: "Active Developers",
    value: 12,
    icon: Users,
    description: "Growing network of skilled professionals",
  },
  {
    label: "Client Satisfaction",
    value: 0,
    icon: Award,
    description: "Positive feedback from clients",
    suffix: "%",
  },
  {
    label: "Growth Rate",
    value: 0,
    icon: TrendingUp,
    description: "Year over year expansion",
    suffix: "%",
  },
  {
    label: "Countries Reached",
    value: 3,
    icon: Globe,
    description: "Global reach and impact",
  },
];

export function ImpactMetrics() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric) => (
            <ImpactCounter key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
