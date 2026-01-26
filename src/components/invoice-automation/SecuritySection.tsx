import React from "react";
import { Lock, Database, FileText, Shield, Cloud } from "lucide-react";

export function SecuritySection() {
  const features = [
    {
      icon: Lock,
      text: "Access limited to authorized users",
    },
    {
      icon: Database,
      text: "Data stored only as required for processing",
    },
    {
      icon: FileText,
      text: "Audit logs for actions and approvals",
    },
    {
      icon: Shield,
      text: "NDA available upon request",
    },
    {
      icon: Cloud,
      text: "Option to deploy within your environment/tenant when required",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Security & data handling
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-700 pt-2">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
