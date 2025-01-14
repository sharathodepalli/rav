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
  const [generalError, setGeneralError] = useState<string | null>(null); // Separate general error state
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    // Basic validation for required fields
    Object.entries(values).forEach(([key, value]) => {
      if (value === '' || value === undefined) {
        newErrors[key as keyof T] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setGeneralError(null); // Clear previous errors

    try {
      await sendEmail({
        form_type: formType,
        ...values,
      });

      setStatus('success');
      setValues(initialValues);
      onSuccess?.();
    } catch (error) {
      setStatus('error');
      setGeneralError('An unexpected error occurred. Please try again later.'); // Set general error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    values,
    errors,
    generalError,
    isLoading,
    status,
    handleChange,
    handleSubmit,
  };
}
