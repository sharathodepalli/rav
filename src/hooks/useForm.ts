import { useState, useCallback } from "react";

interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [formError, setFormError] = useState<string | null>(null); // Separate form-level error
  const [isLoading, setIsLoading] = useState(false);

  // Handle field changes
  const handleChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value, type } = event.target;

      if (type === "checkbox") {
        const checkbox = event.target as HTMLInputElement;
        const currentValues = (values[name] as string[]) || [];

        setValues((prev) => ({
          ...prev,
          [name]: checkbox.checked
            ? [...currentValues, value]
            : currentValues.filter((v) => v !== value),
        }));
      } else {
        setValues((prev) => ({ ...prev, [name]: value }));
      }

      // Clear field-specific error on change
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [values, errors]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);
      setFormError(null); // Clear any previous form-level errors

      try {
        await onSubmit(values);
        setValues(initialValues); // Reset form on success
        setErrors({}); // Clear field-specific errors
      } catch (error) {
        if (error instanceof Error) {
          setFormError(error.message); // Set a form-level error
        }
      } finally {
        setIsLoading(false);
      }
    },
    [values, initialValues, onSubmit]
  );

  return {
    values,
    errors,
    formError, // Expose form-level error
    isLoading,
    handleChange,
    handleSubmit,
  };
}
