import { Check } from "lucide-react";

export function Deliverables() {
  const items = [
    "Invoice intake setup (email/SharePoint/folder)",
    "OCR + AI extraction of key fields (vendor, invoice #, date, totals, tax, PO #)",
    "Validation rules (totals, duplicates, vendor, required fields)",
    "Exceptions dashboard (approve/reject/request info)",
    "Export (ERP-ready CSV; API integration optional)",
    "Activity logs + audit trail",
    "Handover + training session",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            What's Included in the 10-Day Sprint
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to go live
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-gray-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
