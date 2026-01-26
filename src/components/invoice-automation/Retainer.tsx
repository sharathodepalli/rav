import React from "react";
import { RefreshCw, Settings, FileEdit, TrendingUp } from "lucide-react";

export function Retainer() {
  const benefits = [
    { icon: RefreshCw, text: "Monitoring" },
    { icon: Settings, text: "Fixes" },
    { icon: FileEdit, text: "New templates" },
    { icon: TrendingUp, text: "Rule updates & enhancements" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ongoing optimization & support
          </h2>
          <p className="text-lg text-gray-600 mt-2">(monthly retainer)</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <p className="text-xl text-gray-700 mb-6 text-center">
            Vendors and formats change. Rules evolve. Retainer keeps the
            workflow reliable and improving.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <p className="text-sm text-gray-700">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded">
            <p className="text-2xl font-bold text-primary-900 text-center">
              $2k–$8k/month
            </p>
            <p className="text-gray-600 text-center mt-2">
              For monitoring, fixes, new templates, rule updates, and
              enhancements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
