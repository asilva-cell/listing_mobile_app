import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

export default function AppFormField({ name, ...otherProps }) {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

