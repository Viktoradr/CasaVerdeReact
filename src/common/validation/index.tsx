import { useState, useEffect } from "react";

export function useFormik({ initialValues, validate }: any) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event: any) {
    const fieldName = event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event: any) {
    const fieldName = event.target.getAttribute("name");
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values: any) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    setErrors,
    handleChange,
    handleBlur,
  };
}
