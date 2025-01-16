import React from "react";
import { Lightbulb, Users, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: Lightbulb,
    title: "Share Your Vision",
    description: "Submit your innovative project idea through our platform.",
  },
  {
    icon: Users,
    title: "Match with Developers",
    description:
      "Get matched with skilled developers who align with your project needs.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Work collaboratively to bring your idea to life with expert guidance.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy your solution and make an impact in the market.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple steps to transform your idea into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform -translate-x-1/2" />
                )}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
