import { Users, FileText, RefreshCw, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Encryption",
      text: "AES-256 encryption at rest and TLS 1.3 in transit. Your invoice data is as secure as your online banking.",
    },
    {
      icon: Lock,
      title: "Role-Based Access Control",
      text: "Granular permissions ensure only authorized team members can view, approve, or export invoices.",
    },
    {
      icon: FileText,
      title: "Complete Audit Trail",
      text: "Every action is logged with timestamps and user details. Perfect for compliance audits and dispute resolution.",
    },
    {
      icon: Users,
      title: "Human-in-the-Loop",
      text: "AI handles the routine work. Your team reviews only exceptions and edge cases—maintaining full control.",
    },
    {
      icon: RefreshCw,
      title: "99.9% Uptime SLA",
      text: "Automatic retries, failover systems, and real-time monitoring ensure your invoices never get stuck.",
    },
  ];

  return (
    <section
      id="security"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Enterprise Security, Built In
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Production-ready security and compliance from day one
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start text-left p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-primary-400 group"
              >
                <div className="flex-shrink-0 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg group-hover:bg-primary-600 transition-colors">
                    <Icon
                      className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button
              variant="primary"
              className="px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
