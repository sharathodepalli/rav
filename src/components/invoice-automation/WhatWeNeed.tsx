import { FileText, List, Users, Download, Mail, Database } from "lucide-react";

export function WhatWeNeed() {
  const requirements = [
    {
      icon: FileText,
      title: "20 sample invoices",
      detail: "5 vendors minimum (PDFs preferred; anonymized is fine)",
    },
    {
      icon: List,
      title: "Required fields list",
      detail: "What you need extracted from each invoice",
    },
    {
      icon: Users,
      title: "Approval rules + approvers",
      detail: "Who approves what, based on amount/vendor",
    },
    {
      icon: Download,
      title: "Export format + owner contact",
      detail: "CSV template or API endpoint (finance/IT contact)",
    },
    {
      icon: Mail,
      title: "Mailbox/SharePoint access",
      detail: "Test folder or forwarding rule for invoice intake",
    },
    {
      icon: Database,
      title: "ERP import sample / mapping",
      detail: "CSV template or field mapping for your ERP system",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            What We Need to Start
          </h2>
          <p className="text-xl text-gray-600">
            Simple prep, no heavy lift on your side
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <Icon
                      className="h-6 w-6 text-primary-600"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{req.title}</h3>
                  <p className="text-sm text-gray-600">{req.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
