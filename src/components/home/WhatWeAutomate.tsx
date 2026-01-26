export function WhatWeAutomate() {
  const steps = [
    {
      num: "01",
      title: "Email Intake",
      desc: "Invoices arrive by email. We capture them automatically—every format, every vendor.",
    },
    {
      num: "02",
      title: "AI Extraction",
      desc: "Extract all fields with 99%+ accuracy. No templates needed. Works day one.",
    },
    {
      num: "03",
      title: "Validation",
      desc: "3-way matching, duplicate detection, business rules—all automatic.",
    },
    {
      num: "04",
      title: "Approvals",
      desc: "Route to the right people based on your rules. Track everything.",
    },
    {
      num: "05",
      title: "ERP Integration",
      desc: "Push directly to QuickBooks, NetSuite, SAP, or any system you use.",
    },
    {
      num: "06",
      title: "Exception Handling",
      desc: "AI flags issues with context. Your team reviews only what needs attention.",
    },
  ];

  return (
    <section id="what-we-automate" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete End-to-End Automation
          </h2>
          <p className="text-xl text-gray-600">
            From inbox to ERP in seconds. Your team only handles exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl font-bold text-primary-600">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
