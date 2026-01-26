import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function DayByDayTimeline() {
  const days = [
    { day: "Day 1", task: "Kickoff + access + samples" },
    { day: "Days 2–3", task: "Intake + extraction setup" },
    { day: "Day 4", task: "Validation rules configuration" },
    { day: "Day 5", task: "Exceptions dashboard build" },
    { day: "Day 6", task: "Approvals routing" },
    { day: "Days 7–8", task: "ERP export (CSV/API)" },
    { day: "Day 9", task: "Testing + tuning" },
    { day: "Day 10", task: "Go-live + handover" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            10-Day Delivery Plan
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Exactly what happens, day by day (10 business days, Mon–Fri)
          </p>
          <p className="text-base text-gray-500">
            You'll see a working version by Day 5 (exceptions dashboard)
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {days.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <div className="font-bold text-gray-900 mb-1">{item.day}</div>
                  <div className="text-gray-600">{item.task}</div>
                </div>
                <div className="ml-auto flex-shrink-0 pt-2">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA after timeline */}
          <div className="mt-10 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="primary"
                  className="px-8 py-3 text-base font-semibold"
                >
                  Book a 10-Min Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button
                  variant="outline"
                  className="px-8 py-3 text-base font-semibold"
                >
                  See Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
