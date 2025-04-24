"use client";
import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";

import Error from "./Error";
import Input from "./Input";
import Label from "./Label";

interface FieldProps {
  Icon?: React.ElementType;
  handleIconClick?: () => void;
  buttonText?: string;
  handleButtonClick?: () => void;
  label?: string;
  mandatory?: boolean;
  name: string;
  placeholder?: string;
  value?: string;
  type: string;
  [key: string]: any;
}

const Field: React.FC<FieldProps> = ({
  Icon,
  handleIconClick,
  buttonText,
  handleButtonClick,
  label,
  mandatory,
  name,
  placeholder,
  value,
  type,
  ...otherProps
}) => {
  const { errors, handleChange, touched, values } = useFormikContext<{
    [key: string]: string;
  }>();
  const [inputValue, setInputValue] = useState("");

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleChange(e);
  };

  useEffect(() => {
    if (value) {
      setInputValue(value);
      values[name] = value;
    }
  }, [value, name, values]);

  const hasError = errors[name] !== undefined;

  return (
    <div className="form-group mb-5">
      {label && (
        <Label
          name={label}
          error={hasError ? "true" : "false"}
          label={label}
          visible={touched[name]}
        />
      )}

      <Input
        Icon={Icon}
        handleIconClick={handleIconClick}
        handleChange={value ? handleManualChange : handleChange}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value ? inputValue : values[name]}
        error={errors[name]}
        touched={touched[name]}
        buttonText={buttonText}
        handleButtonClick={handleButtonClick}
        {...otherProps}
      />

      <Error error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default Field; 