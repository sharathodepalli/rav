import {
  Mail,
  Search,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function HowItWorksNew() {
  const steps = [
    {
      icon: Mail,
      number: "01",
      title: "Automatic Capture",
      description:
        "Invoices arrive via email or SharePoint. Our system instantly captures every PDF, image, and attachment—no forwarding, no uploading, no data entry.",
      metric: "100%",
      metricLabel: "Capture Rate",
    },
    {
      icon: Search,
      number: "02",
      title: "AI Extraction & Validation",
      description:
        "Advanced AI reads vendor names, amounts, dates, PO numbers, and line items. Automatically validates business rules, catches duplicates, and performs 3-way matching.",
      metric: "99%+",
      metricLabel: "Accuracy",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Smart Approvals & Export",
      description:
        "Only flagged exceptions need human attention. Clean invoices flow straight to your ERP via API or CSV—approved, coded, and ready for payment.",
      metric: "80%",
      metricLabel: "Auto-Approved",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 font-semibold text-sm mb-6 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Eliminate 95% of Manual Work</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            From Email to ERP in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Battle-tested workflow processing thousands of invoices daily
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0"></div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300 group h-full">
                  {/* Icon & Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-5xl font-black text-gray-200 group-hover:text-primary-200 transition-colors">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Metric */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-primary-600">
                        {step.metric}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {step.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Stats */}
        <div className="bg-gradient-to-br from-slate-900 to-primary-900 rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                  Processing Time
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-1">60s</div>
              <p className="text-gray-400 text-sm">
                Per invoice, fully automated
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                  Straight-Through
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-1">80%</div>
              <p className="text-gray-400 text-sm">Never touch human hands</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                  Time Saved
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-1">15h</div>
              <p className="text-gray-400 text-sm">Per week, per AP person</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/invoice-automation#pricing">
            <Button
              variant="primary"
              className="px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              See Pricing & Timeline
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Free consultation • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
