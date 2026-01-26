import { Check, X } from "lucide-react";

export function ScopeBoundaries() {
  const included = [
    "One workflow",
    "One intake source",
    "Extraction + validation",
    "Exceptions approvals",
    "Export",
    "Audit logs",
  ];

  const notIncluded = [
    "Full ERP replacement",
    "Complex accounting/tax engines",
    "Multi-entity custom logic",
    "24/7 support",
    "Large custom portals",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Scope (So We Ship Fast)
          </h2>
          <p className="text-xl text-gray-600">
            Clear boundaries enable rapid delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Included */}
          <div className="bg-white rounded-xl border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Check className="h-6 w-6 text-green-600" strokeWidth={2.5} />
              </div>
              Included
            </h3>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check
                    className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <X className="h-6 w-6 text-red-600" strokeWidth={2.5} />
              </div>
              Not Included
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <X
                    className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic">
              Available as custom add-on
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
