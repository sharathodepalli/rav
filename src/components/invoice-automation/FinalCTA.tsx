import React from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
          Ready to remove invoice busywork?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link to="/contact">
            <Button
              variant="primary"
              className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto"
            >
              Book a 15-min Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center text-white">
          <Mail className="h-5 w-5 mr-2" />
          <span>
            Or email us at{" "}
            <a
              href="mailto:contact@thetrueshades.com"
              className="underline font-semibold"
            >
              contact@thetrueshades.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
