import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function CTABanner() {
  return (
    <section
      id="get-started"
      className="relative bg-gradient-to-br from-primary-600 to-blue-700 py-20 overflow-hidden"
    >
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Automate Your Invoice Processing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your custom automation solution delivered in 10 days. No long
            implementations, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Your 10-Day Implementation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/invoice-automation#pricing">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-base font-semibold transition-all"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
