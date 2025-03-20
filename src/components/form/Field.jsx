"use client";
import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";

import Error from "./Error";
import Input from "./Input";
import Label from "./Label";

const Field = ({
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
  const { errors, handleChange, touched, values } = useFormikContext();
  const [inputValue, setInputValue] = useState("");

  const handleManualChange = (e) => {
    setInputValue(e.target.value);
    handleChange(e.target.value);
  };

  useEffect(() => {
    if (value) {
      setInputValue(value);
      values[name] = value;
    }
  }, [value]);
  return (
    <div className="form-group mb-5">
      {label && (
        <Label
          name={label}
          error={errors[name]}
          label={label}
          visible={touched[name]}
        />
      )}

      <Input
        Icon={Icon}
        handleIconClick={handleIconClick}
        handleChange={value ? handleManualChange : handleChange}
        label={label}
        mandatory={mandatory}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value ? inputValue : values[name]}
        error={errors[name]}
        visible={touched[name]}
        buttonText={buttonText}
        handleButtonClick={handleButtonClick}
        {...otherProps}
      />

      <Error error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default Field;
