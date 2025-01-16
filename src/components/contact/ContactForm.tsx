import React from "react";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/ui/FormStatus";
import { useEmailForm } from "@/hooks/useEmailForm";

const INQUIRY_TYPES = [
  { value: "", label: "Select reason for contact" },
  { value: "project", label: "Project Inquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Technical Support" },
  { value: "other", label: "Other" },
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
      email: "",
      inquiryType: "",
      message: "",
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        name="name"
        required
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your Name"
      />

      <Input
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
        label="Reason for Contact"
        name="inquiryType"
        required
        options={INQUIRY_TYPES}
        value={values.inquiryType}
        onChange={handleChange}
        error={errors.inquiryType}
      />

      <TextArea
        label="Message"
        name="message"
        required
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        rows={4}
        placeholder="Enter your message"
      />

      <FormStatus status={status} error={generalError || ""} />

      <Button type="submit" isLoading={isLoading}>
        Send Message
      </Button>
    </form>
  );
}
