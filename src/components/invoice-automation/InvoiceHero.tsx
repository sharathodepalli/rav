import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Zap } from "lucide-react";

export function InvoiceHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-blue-700 py-24 sm:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-6 backdrop-blur-sm">
            <Clock className="w-4 h-4" />
            <span>Delivered in 10 Business Days</span>
          </div>

          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl mb-6">
            Invoice & AP Automation Sprint
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl text-white/90 leading-relaxed">
            A working automation delivered in 10 business days: intake →
            extraction → validation → approvals → export + audit trail.
          </p>

          {/* Key Stats */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">95% less manual work</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-white">
              <span className="font-semibold">99%+ extraction accuracy</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-white">
              <span className="font-semibold">10-day delivery</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 font-semibold shadow-xl hover:scale-105 transition-all"
              >
                Book a 15-min Call
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
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 font-semibold transition-all"
              >
                See Pricing
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
