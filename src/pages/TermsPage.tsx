export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main id="main-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <p className="text-sm text-gray-600 mb-6">
                Last Updated: January 27, 2025
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use
                of the Shades website and services (collectively, the
                "Services"). By accessing or using our Services, you agree to be
                bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By using our Services, you represent that you are at least 18
                years old and have the legal authority to enter into these
                Terms. If you are using our Services on behalf of an
                organization, you represent that you have the authority to bind
                that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Shades provides invoice and accounts payable (AP) workflow
                automation services, including but not limited to AI-powered
                invoice extraction, validation, approval routing, and ERP
                integration. Our standard implementation timeline is 10 business
                days from project kickoff.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Service Scope and Deliverables
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our invoice automation service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Email-based invoice intake and processing</li>
                <li>
                  AI extraction of invoice data (vendor, amount, PO, GL codes)
                </li>
                <li>Automated validation and exception flagging</li>
                <li>Configurable approval workflows</li>
                <li>ERP integration (API-based where available)</li>
                <li>Basic reporting dashboard</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Custom features, additional integrations, and extended workflows
                are available as add-ons and subject to separate agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Implementation Timeline
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our standard implementation is 10 business days. This timeline
                assumes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li>
                  Client provides required access and documentation within 2
                  business days
                </li>
                <li>Standard ERP integration (API available)</li>
                <li>No custom feature requests beyond standard scope</li>
                <li>Timely feedback during testing phase</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Delays caused by client or third-party dependencies may extend
                the timeline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Fees and Payment
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Pricing is based on invoice volume and features selected.
                Standard pricing starts at $3,999 for setup and $899/month for
                up to 500 invoices. Payment terms are typically 50% upfront and
                50% upon go-live, unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Client Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Client agrees to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide timely access to systems and documentation</li>
                <li>Designate a technical point of contact</li>
                <li>Test and validate the system during implementation</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain security of login credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Data Security and Confidentiality
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your
                data, including encryption at rest and in transit, role-based
                access control, and regular security audits. We do not sell or
                share your data with third parties except as required to provide
                the Services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHADES SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. OUR TOTAL
                LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE 12
                MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Warranties and Disclaimers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We warrant that our Services will perform substantially as
                described. However, THE SERVICES ARE PROVIDED "AS IS" WITHOUT
                WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
                NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate the Services with 30 days' written
                notice. Upon termination, Client will pay all fees accrued
                through the termination date. We will provide data export within
                30 days of termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Shades retains all rights to the software, platform, and
                underlying technology. Client retains all rights to their data.
                We grant Client a non-exclusive, non-transferable license to use
                the Services during the term of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                provide notice of material changes via email or through the
                Services. Continued use of the Services after changes
                constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to conflict
                of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Email:</strong> legal@thetrueshades.com
                <br />
                <strong>Website:</strong> thetrueshades.com/contact
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
