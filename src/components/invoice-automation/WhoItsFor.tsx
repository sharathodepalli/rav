import { Mail, FileText, AlertCircle, Repeat } from "lucide-react";

export function WhoItsFor() {
  const painPoints = [
    {
      icon: Mail,
      text: "Invoices arrive everywhere → no single intake",
    },
    {
      icon: FileText,
      text: "Manual entry → errors + rework",
    },
    {
      icon: AlertCircle,
      text: "Approvals stall → late payments",
    },
    {
      icon: Repeat,
      text: "Missing PO / duplicates → exceptions pile up",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            For Teams Still Handling Invoices Manually
          </h2>
          <p className="text-xl text-gray-600 mb-2">Sound familiar?</p>
          <p className="text-base text-gray-500">
            If this is weekly chaos, the sprint is built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const isErrorCard = index === painPoints.length - 1;
            return (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 ${
                  isErrorCard
                    ? "hover:border-red-300"
                    : "hover:border-primary-300"
                } hover:shadow-md transition-all`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`flex items-center justify-center w-12 h-12 ${
                      isErrorCard ? "bg-red-100" : "bg-primary-100"
                    } rounded-lg`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isErrorCard ? "text-red-600" : "text-primary-600"
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <p className="text-gray-700 pt-2 text-base">{point.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-600 font-medium">
            That's why the 10-day sprint exists.
          </p>
        </div>
      </div>
    </section>
  );
}
