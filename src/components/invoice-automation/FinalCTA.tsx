import React from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
          Book a 10-Min Demo
        </h2>
        <p className="text-xl text-white/90 mb-8">
          We'll confirm feasibility in 24 hours
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/contact">
            <Button
              variant="primary"
              className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto px-10 py-4 text-lg font-bold shadow-xl"
            >
              Book Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="space-y-2 text-white/80 text-sm">
          <p>✓ No obligation</p>
          <p>✓ Free consultation</p>
          <p>✓ 24-hour feasibility check</p>
          <p>✓ We reply within 24 hours (weekdays)</p>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20 flex items-center justify-center text-white/90">
          <Mail className="h-5 w-5 mr-2" />
          <span>
            Or email{" "}
            <a
              href="mailto:contact@thetrueshades.com"
              className="underline font-semibold hover:text-white"
            >
              contact@thetrueshades.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
