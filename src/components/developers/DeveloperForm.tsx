import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { sendEmail } from "@/services/email";

const EXPERIENCE_LEVELS = [
  { value: "", label: "Select your experience level" },
  { value: "junior", label: "Junior (0-2 years)" },
  { value: "mid", label: "Mid-Level (3-5 years)" },
  { value: "senior", label: "Senior (6+ years)" },
];

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "DevOps",
  "Cloud",
  "Mobile",
  "UI/UX",
];

export function DeveloperForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skills: [] as string[],
    experienceLevel: "",
    portfolioUrl: "",
    motivation: "",
  });

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null
  ); // For inline status messages

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox" && event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const currentSkills = formData.skills;
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...currentSkills, value]
          : currentSkills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    let error = "";

    if (name === "email" && (!value || !/\S+@\S+\.\S+/.test(value))) {
      error = "Valid Email is required";
    } else if (name === "portfolioUrl" && !/^https?:\/\/\S+/.test(value)) {
      error = "Valid Portfolio URL is required";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<string, string>> = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid Email is required";
    }
    if (!formData.experienceLevel) {
      newErrors.experienceLevel = "Experience Level is required";
    }
    if (!/^https?:\/\/\S+/.test(formData.portfolioUrl)) {
      newErrors.portfolioUrl = "Valid Portfolio URL is required";
    }
    if (!formData.motivation) {
      newErrors.motivation = "Motivation is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setFormStatus(null); // Clear previous status

    try {
      await sendEmail({
        form_type: "developer",
        ...formData,
        skills: formData.skills.join(", "),
      });

      setFormStatus("success"); // Show success message
      setFormData({
        fullName: "",
        email: "",
        skills: [],
        experienceLevel: "",
        portfolioUrl: "",
        motivation: "",
      });
      setErrors({});
    } catch (error) {
      // console.error("Error submitting form:", error);
      setFormStatus("error"); // Show error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
    {/* <span className="text-red-500"> *</span> */}
      <Input
        className="px-3 py-1 w-full"
        label="Full Name"
        name="fullName"
        required
        placeholder="John Doe"
        value={formData.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.fullName}
      />
      <Input
       className="px-3 py-1"
        label="Email"
        type="email"
        name="email"
        required
        placeholder="john.doe@example.com"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
      />
      <Select
        className="px-3 py-1"
        label="Experience Level"
        name="experienceLevel"
        options={EXPERIENCE_LEVELS}
        value={formData.experienceLevel}
        onChange={handleChange}
        error={errors.experienceLevel}
      />
      <Input
        className="px-3 py-1"
        label="Portfolio URL"
        type="url"
        name="portfolioUrl"
        placeholder="https://your-portfolio.com"
        value={formData.portfolioUrl}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.portfolioUrl}
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Skills
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <label
              key={skill}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50"
            >
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
      </div>
      <TextArea
        className="px-3 py-1"
        label="Motivation"
        name="motivation"
        required
        placeholder="Tell us why you want to join our developer network..."
        value={formData.motivation}
        onChange={handleChange}
        error={errors.motivation}
        maxLength={300}
        rows={4}
      />
      <p className="text-sm text-gray-500">
        {formData.motivation.length} / 300 characters
      </p>
      <Button
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
        className="w-full md:w-auto"
      >
        {isLoading ? "Submitting..." : "Submit Application"}
      </Button>
      {/* Inline success or error message */}
      {formStatus === "success" && (
        <p className="text-green-500">
          Your application has been submitted successfully!
        </p>
      )}
      {formStatus === "error" && (
        <p className="text-red-500">
          Failed to submit your application. Please try again later.
        </p>
      )}
    </form>
  );
}
