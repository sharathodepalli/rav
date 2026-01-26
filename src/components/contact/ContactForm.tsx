import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/ui/FormStatus";
import { useEmailForm } from "@/hooks/useEmailForm";

const INQUIRY_TYPES = [
  { value: "", label: "Select reason for contact" },
  { value: "invoice-automation", label: "Invoice Automation Inquiry" },
  { value: "project", label: "Project Inquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
];

const INVOICE_VOLUMES = [
  { value: "", label: "Select monthly invoice volume" },
  { value: "<100", label: "Less than 100" },
  { value: "100-500", label: "100-500" },
  { value: "500-2000", label: "500-2000" },
  { value: "2000+", label: "2000+" },
];

const INVOICE_SOURCES = [
  { value: "", label: "Where do invoices come from?" },
  { value: "email", label: "Email" },
  { value: "sharepoint", label: "SharePoint" },
  { value: "portal", label: "Portal" },
  { value: "mixed", label: "Mixed" },
];

const CURRENT_SYSTEMS = [
  { value: "", label: "Current system" },
  { value: "excel-other", label: "Excel/Other" },
  { value: "sap", label: "SAP" },
  { value: "oracle", label: "Oracle" },
  { value: "dynamics", label: "Microsoft Dynamics" },
  { value: "netsuite", label: "NetSuite" },
  { value: "quickbooks", label: "QuickBooks" },
  { value: "other-erp", label: "Other ERP" },
];

export function ContactForm() {
  const {
    values,
    errors,
    generalError,
    isLoading,
    status,
    handleChange,
    handleSubmit,
  } = useEmailForm({
    formType: "contact",
    initialValues: {
      name: "",
      company: "",
      email: "",
      inquiryType: "",
      invoiceVolume: "",
      invoiceSource: "",
      currentSystem: "",
      message: "",
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        className="px-3 py-1"
        label="Name"
        name="name"
        required
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your Name"
      />

      <Input
        className="px-3 py-1"
        label="Company"
        name="company"
        required
        value={values.company}
        onChange={handleChange}
        error={errors.company}
        placeholder="Enter your company name"
      />

      <Input
        className="px-3 py-1"
        label="Email"
        type="email"
        name="email"
        required
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter your email"
      />

      <Select
        className="px-3 py-1"
        label="Reason for Contact"
        name="inquiryType"
        required
        options={INQUIRY_TYPES}
        value={values.inquiryType}
        onChange={handleChange}
        error={errors.inquiryType}
      />

      {values.inquiryType === "invoice-automation" && (
        <>
          <Select
            className="px-3 py-1"
            label="Monthly Invoice Volume"
            name="invoiceVolume"
            options={INVOICE_VOLUMES}
            value={values.invoiceVolume}
            onChange={handleChange}
            error={errors.invoiceVolume}
          />

          <Select
            className="px-3 py-1"
            label="Current System"
            name="currentSystem"
            options={CURRENT_SYSTEMS}
            value={values.currentSystem}
            onChange={handleChange}
            error={errors.currentSystem}
          />

          <Select
            className="px-3 py-1"
            label="Where do invoices come from?"
            name="invoiceSource"
            options={INVOICE_SOURCES}
            value={values.invoiceSource}
            onChange={handleChange}
            error={errors.invoiceSource}
          />
        </>
      )}

      <TextArea
        className="px-3 py-1"
        label="Message"
        name="message"
        required
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        rows={4}
        placeholder="Enter your message"
      />

      <p className="text-sm text-gray-600">We respond within 24 hours.</p>

      <FormStatus status={status} error={generalError || ""} />

      <Button type="submit" isLoading={isLoading}>
        Send Message
      </Button>
    </form>
  );
}
