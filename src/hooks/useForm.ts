import { useState, useCallback } from 'react';

interface UseFormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends Record<string, any>>({ 
  initialValues,
  onSubmit
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    
    if (type === 'checkbox') {
      const checkbox = event.target as HTMLInputElement;
      const currentValues = (values[name] as string[]) || [];
      
      setValues(prev => ({
        ...prev,
        [name]: checkbox.checked
          ? [...currentValues, value]
          : currentValues.filter(v => v !== value)
      }));
    } else {
      setValues(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [values, errors]);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    try {
      await onSubmit(values);
      setValues(initialValues); // Reset form on success
    } catch (error) {
      if (error instanceof Error) {
        setErrors({ form: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  }, [values, initialValues, onSubmit]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  };
}