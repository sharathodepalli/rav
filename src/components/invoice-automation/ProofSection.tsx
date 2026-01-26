import React from "react";
import { Play, Image as ImageIcon, FileText } from "lucide-react";

export function ProofSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            See it in action
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Demo Video Placeholder */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Demo Video (Coming Soon)</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Watch the automation in action
            </h3>
            <p className="text-gray-600 mt-2">
              See how invoices flow from email to ERP-ready export
            </p>
          </div>

          {/* Screenshots Placeholder */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Extracted Fields View</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Automated field extraction
              </h3>
              <p className="text-gray-600 mt-2">
                OCR/AI extracts vendor, amounts, dates automatically
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Exceptions Queue</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Smart exceptions handling
              </h3>
              <p className="text-gray-600 mt-2">
                Human approval only where needed
              </p>
            </div>
          </div>
        </div>

        {/* Mini Case Study */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Demo Case Study
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-red-600 font-semibold mb-2">Before</div>
              <p className="text-gray-700">Manual email/PDF handling</p>
              <p className="text-gray-500 text-sm mt-2">
                15-20 hours/week on data entry
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl text-primary-600">→</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 font-semibold mb-2">After</div>
              <p className="text-gray-700">
                Extracted + validated + exceptions queue
              </p>
              <p className="text-green-600 text-sm mt-2 font-semibold">
                3-4 hours/week (80% reduction)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
