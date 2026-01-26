import { Check, Star } from "lucide-react";

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$3k–$6k",
      features: [
        "Single inbox/source",
        "Core fields extraction",
        "CSV export",
        "Basic validations",
      ],
      recommended: false,
    },
    {
      name: "Standard",
      price: "$7k–$15k",
      features: [
        "Exceptions dashboard",
        "Strong validations + duplicates",
        "Reporting/status view",
        "Better reliability & logging",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "$15k–$30k+",
      features: [
        "ERP/API integration",
        "Multi-step approvals",
        "Advanced rules + security requirements",
        "Higher volume + SLAs",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            One-time implementation fee. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden border-2 transition-all hover:shadow-lg ${
                tier.recommended
                  ? "border-primary-600 shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              {tier.recommended && (
                <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  MOST POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check
                        className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Final price depends on invoice volume, number of formats/vendors,
            and integration needs. All tiers include 10-day delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
