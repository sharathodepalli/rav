import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Zap } from "lucide-react";

export function InvoiceHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-blue-700 py-16 sm:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl mb-4">
            Delivered in 10 Business Days
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-xl sm:text-2xl text-white/95 leading-relaxed mb-3">
            From email/SharePoint to ERP in seconds — your team only handles
            exceptions.
          </p>

          <p className="max-w-2xl mx-auto text-base text-white/75">
            Capture → extract → validate → approvals → export + audit trail.
          </p>

          {/* Key Stats */}
          <div className="mt-8 max-w-4xl mx-auto">
            {/* Input/Output Format Strip */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
              <div className="px-6 py-3 bg-white/15 rounded-lg backdrop-blur-sm border border-white/30">
                <div className="text-xs text-white/70 font-semibold uppercase tracking-wide mb-1">
                  Input
                </div>
                <div className="text-white font-semibold text-sm">
                  Email, SharePoint, folders, PDFs
                </div>
              </div>
              <div className="hidden sm:block text-white/50 text-2xl">→</div>
              <div className="px-6 py-3 bg-white/15 rounded-lg backdrop-blur-sm border border-white/30">
                <div className="text-xs text-white/70 font-semibold uppercase tracking-wide mb-1">
                  Exports to
                </div>
                <div className="text-white font-semibold text-sm">
                  CSV, API, QuickBooks/NetSuite/SAP import-ready
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 text-center">
              10 business days after kickoff + access + sample invoices
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-2xl hover:scale-105 transition-all"
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
                className="border-2 border-white/60 text-white hover:bg-white/10 px-10 py-4 text-base font-semibold transition-all"
              >
                See Pricing
              </Button>
            </a>
          </div>
          <p className="mt-5 text-sm text-white/80">
            NDA available • No credit card • Reply in 24h
          </p>
          <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto">
            Typical results: 80% straight-through • 99%+ extraction • 10-day
            go-live
          </p>
        </div>
      </div>
    </section>
  );
}
