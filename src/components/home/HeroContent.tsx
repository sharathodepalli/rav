import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  FileCheck,
  TrendingUp,
  Users,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function HeroContent() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    // Only run animation once per session
    if (sessionStorage.getItem("heroCountersAnimated")) {
      setCounter1(80);
      setCounter2(10);
      setCounter3(100);
      return;
    }

    const timer1 = setInterval(() => {
      setCounter1((prev) => (prev < 80 ? prev + 2 : 80));
    }, 30);
    const timer2 = setInterval(() => {
      setCounter2((prev) => (prev < 10 ? prev + 1 : 10));
    }, 100);
    const timer3 = setInterval(() => {
      setCounter3((prev) => (prev < 100 ? prev + 5 : 100));
    }, 20);

    // Mark as animated after completion
    setTimeout(() => {
      sessionStorage.setItem("heroCountersAnimated", "true");
    }, 3000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  const features = [
    { icon: Clock, text: "10-day sprint", color: "text-blue-400" },
    {
      icon: FileCheck,
      text: "99%+ accuracy",
      color: "text-green-400",
    },
    { icon: Zap, text: "Works with most ERPs", color: "text-yellow-400" },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-32 sm:pb-32">
      {/* Top badge */}
      <div className="text-center mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/20 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span className="text-sm font-semibold">
            Invoice Automation in 10 Days (Typical)
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - Content */}
        <div className="text-center lg:text-left">
          {/* Eyebrow */}
          <p className="text-sm sm:text-base text-blue-300 font-semibold tracking-wide mb-5 animate-fade-in">
            For every finance team drowning in invoice chaos
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 animate-slide-up">
            <span className="block mb-3">Stop Chasing</span>
            <span className="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 animate-gradient drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              Invoices.
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-6xl">
              Automate AP in 10 Days.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-slide-up animation-delay-200 max-w-2xl mx-auto lg:mx-0">
            Eliminate manual AP work and close invoices 10× faster — in just 10
            days.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8 animate-slide-up animation-delay-400">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 group"
                >
                  <Icon
                    className={`w-5 h-5 ${feature.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-sm font-semibold text-white">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-12 animate-slide-up animation-delay-600">
            <Link to="/contact" className="group">
              <Button
                variant="primary"
                className="w-full sm:w-auto px-10 py-5 text-lg font-bold bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 shadow-[0_10px_40px_-15px_rgba(99,102,241,0.8)] hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,1)] transform hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <span>Book a 10-Min Demo</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/invoice-automation#pricing">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-10 py-5 text-lg font-semibold border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 rounded-xl"
              >
                <span>See Pricing</span>
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 animate-fade-in animation-delay-800">
            <p className="text-xs text-gray-400 text-center lg:text-left mb-3">
              Built with UiPath, Power Automate & OCR + LLM validation
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>10-day sprint (typical)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No 6-month implementations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Works with your ERP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Visual mockup */}
        <div className="relative animate-slide-up animation-delay-400">
          {/* Floating dashboard mockup */}
          <div className="relative">
            {/* Main card - Dashboard preview */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-500">
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-white text-sm font-semibold">
                  Invoice Automation Dashboard
                </div>
                <div className="w-20"></div>
              </div>

              <div className="p-6 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">
                      {counter1}%
                    </div>
                    <div className="text-xs text-gray-600">Automated</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-4 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">
                      {counter2}d
                    </div>
                    <div className="text-xs text-gray-600">Deployment</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 rounded-lg col-span-2 sm:col-span-1">
                    <div className="text-xl sm:text-2xl font-bold text-purple-600">
                      99%+
                    </div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                </div>

                {/* Invoice items */}
                <div className="space-y-2">
                  {[
                    {
                      id: 1001,
                      vendor: "Acme Supply Co",
                      amount: "$2,847.50",
                      status: "approved",
                    },
                    {
                      id: 1002,
                      vendor: "TechPro Systems",
                      amount: "$4,125.00",
                      status: "approved",
                    },
                    {
                      id: 1003,
                      vendor: "Office Plus Inc",
                      amount: "$1,562.75",
                      status: "exception",
                    },
                  ].map((invoice, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded flex items-center justify-center">
                          <FileCheck className="w-4 h-4 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            Invoice #{invoice.id}
                          </div>
                          <div className="text-xs text-gray-500">
                            {invoice.vendor}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          {invoice.amount}
                        </span>
                        {invoice.status === "approved" ? (
                          <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                            ✓
                          </div>
                        ) : (
                          <div className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                            Missing PO
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Processing Queue</span>
                    <span>87% complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full w-[87%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Time Saved</div>
                  <div className="text-lg font-bold text-gray-900">
                    Up to 15h/wk
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Invoices/Day</div>
                  <div className="text-lg font-bold text-gray-900">250+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="mt-24 text-center animate-fade-in animation-delay-1200">
        <p className="text-base text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Trusted by finance teams in{" "}
          <span className="text-white font-semibold">manufacturing</span>,{" "}
          <span className="text-white font-semibold">healthcare</span>,{" "}
          <span className="text-white font-semibold">
            professional services
          </span>
          , and <span className="text-white font-semibold">distribution</span>{" "}
          to eliminate manual invoice processing
        </p>
      </div>
    </div>
  );
}
