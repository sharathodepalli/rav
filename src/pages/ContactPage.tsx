import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { Map } from "@/components/contact/Map";
import { Mail, MessageSquare } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main id="main-content">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-blue-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-600 font-semibold text-sm mb-6 shadow-lg mx-auto">
                <MessageSquare className="w-4 h-4" />
                <span>We respond within 24 hours</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Have questions about invoice automation? Ready to get started?
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <ContactInfo />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <SocialLinks />
              </div>

              <Map />
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6 text-primary-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                </div>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
