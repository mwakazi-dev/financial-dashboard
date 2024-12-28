import { useState } from 'react';

import { formSchema } from '../lib/utils';
const useForm = (initialValues: any) => {
  const [values, setValues] = useState<{
    value: {
      [key: string]: string;
    };
    error: {
      [key: string]: string[];
    };
  }>(initialValues as any);

  const handleInputChange = (field: string, value: string) => {
    const validation = formSchema.safeParse({
      ...values.value,
      [field]: value,
    });

    const errors = {
      fullName: [],
      userName: [],
      email: [],
      password: [],
      dateOfBirth: [],
      presentAddress: [],
      permanentAddress: [],
      city: [],
      postalCode: [],
      country: [],
    };

    const newValues = {
      value: {
        ...values.value,
        [field]: value,
      },
      error: {
        ...errors,
        ...(validation as any)?.error?.flatten()?.fieldErrors,
      },
    };

    setValues(newValues as any);
  };

  return {
    values,
    onInputChange: handleInputChange,
  };
};

export default useForm;
