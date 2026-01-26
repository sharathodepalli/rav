export function Timeline() {
  const days = [
    { range: "Day 1–2", task: "Intake + sample docs + mapping" },
    { range: "Day 3–5", task: "Extraction + validations" },
    { range: "Day 6–7", task: "Exceptions dashboard + approvals" },
    { range: "Day 8–9", task: "Export + testing + hardening" },
    { range: "Day 10", task: "Demo + handover + next steps" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            10-Day Delivery Plan
          </h2>
          <p className="text-xl text-gray-600">
            Fast-tracked, battle-tested process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="space-y-6">
              {days.map((day, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline line - only show for items that aren't the last */}
                  {index < days.length - 1 && (
                    <div className="absolute left-8 top-16 w-1 h-[calc(100%+1.5rem)] bg-gradient-to-b from-primary-600 to-blue-600" />
                  )}

                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="ml-6 bg-white rounded-xl p-6 flex-1 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {day.range}
                    </h3>
                    <p className="text-gray-600 text-base">{day.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
