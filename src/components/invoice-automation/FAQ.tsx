import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-700 text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "Do we need to change our ERP?",
      answer:
        "No. We export in a format your ERP can import (CSV/API depending on setup).",
    },
    {
      question: "What if the invoice is messy/scanned?",
      answer:
        "We handle OCR + extraction, and route uncertain cases to the exceptions queue.",
    },
    {
      question: "Is human approval required?",
      answer: "Only for exceptions. Clean invoices can go straight through.",
    },
    {
      question: "Where does the automation run (your environment or ours)?",
      answer:
        "By default, the automation runs in our secure cloud environment. For enterprise clients with specific security requirements, we can deploy to your environment (additional setup required).",
    },
    {
      question: "Do you offer ongoing support after go-live?",
      answer:
        "Yes. Ongoing support is optional and includes monitoring, tuning, vendor format updates, and priority assistance. Pricing starts at $500/month depending on volume and complexity.",
    },
    {
      question: "What do you need to start?",
      answer:
        "Share 10–20 sample invoices (with sensitive data removed if needed) and we map the workflow.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
