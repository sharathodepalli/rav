import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 animate-gradient">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or perhaps it never existed.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <Button
              variant="primary"
              className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Homepage
            </Button>
          </Link>
          <Link to="/invoice-automation">
            <Button
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm transition-all duration-300 rounded-xl flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Explore Solutions
            </Button>
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <Link
              to="/invoice-automation"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Invoice Automation
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Contact Us
            </Link>
            <Link
              to="/invoice-automation#pricing"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
