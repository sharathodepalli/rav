import { useState } from 'react';
import { sendEmail } from '@/services/email';

interface UseEmailFormProps<T> {
  formType: 'developer' | 'innovator' | 'contact';
  initialValues: T;
  onSuccess?: () => void;
}

export function useEmailForm<T extends Record<string, any>>({
  formType,
  initialValues,
  onSuccess,
}: UseEmailFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null); // State for form-level errors
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validates required fields
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.entries(values).forEach(([key, value]) => {
      if (value === '' || value === undefined) {
        newErrors[key as keyof T] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handles input changes and clears field-specific errors
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
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
    if (errors[name as keyof T]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handles form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setGeneralError(null); // Clear previous form-level errors

    try {
      await sendEmail({
        form_type: formType,
        ...values,
      });

      setStatus('success');
      setValues(initialValues); // Reset form on success
      setGeneralError(null);    // Clear general errors
      onSuccess?.();            // Trigger success callback if provided
    } catch (error) {
      setStatus('error');
      setGeneralError('An unexpected error occurred. Please try again later.'); // Form-level error message
    } finally {
      setIsLoading(false);
    }
  };

  return {
    values,          // Current form values
    errors,          // Field-specific errors
    generalError,    // Form-level error message
    isLoading,       // Loading state during submission
    status,          // Submission status
    handleChange,    // Input change handler
    handleSubmit,    // Form submission handler
  };
}
