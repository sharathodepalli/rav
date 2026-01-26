import { Check, TrendingUp } from "lucide-react";

export function Deliverables() {
  const groups = [
    {
      heading: "Intake Setup",
      items: ["Invoice intake setup (email/SharePoint/folder)"],
    },
    {
      heading: "Extraction + Validation",
      items: [
        "OCR + AI extraction of key fields (vendor, invoice #, date, totals, tax, PO #)",
        "Validation rules (totals, duplicates, vendor, required fields)",
        "Exceptions dashboard (approve/reject/request info)",
      ],
    },
    {
      heading: "Approvals + Export + Audit",
      items: [
        "Export (ERP-ready CSV; ERP API integration if available)",
        "Activity logs + audit trail",
        "Handover + training session",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            What's Included in the 10-Day Sprint
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            A working automation + exceptions dashboard + audit trail + handover
          </p>
          <p className="text-base text-gray-500">
            You get a complete system, not just a proof of concept
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 mb-8">
          <div className="space-y-6">
            {groups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {group.heading}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                          <Check
                            className="h-4 w-4 text-white"
                            strokeWidth={3}
                          />
                        </div>
                      </div>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-sm text-gray-500 text-center">
            Includes 1 workflow end-to-end (Invoice/AP). Additional workflows
            are separate sprints.
          </p>
        </div>

        {/* Outcomes */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">Typical Results</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
            <div className="px-5 py-3 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">80%</div>
              <div className="text-sm text-gray-600">straight-through</div>
            </div>
            <div className="px-5 py-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">99%+</div>
              <div className="text-sm text-gray-600">extraction accuracy</div>
            </div>
            <div className="px-5 py-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">
                Up to 15h
              </div>
              <div className="text-sm text-gray-600">per week saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
