import React, { useRef } from "react";
import { useFormikContext } from "formik";

import Label from "./Label";

interface SelectProps {
  name: string;
  label?: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ name, label, options }) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const { errors, touched, handleChange } = useFormikContext<{
    [key: string]: string;
  }>();

  const handleFocus = () => {
    if (inputRef.current?.classList.contains("active")) {
      return;
    } else {
      inputRef.current?.classList.add("active");
    }
  };

  const handleBlur = () => {
    inputRef.current?.classList.remove("active");
  };

  return (
    <div className="form-group mb-5">
      {label && (
        <Label
          name={label}
          error={errors[name] !== undefined ? "true" : "false"}
          label={label}
          visible={touched[name]}
        />
      )}

      <select
        name={name}
        id={name}
        className={`
          w-full rounded-[12px] text-white text-base leading-base font-[500] px-[18px] py-[12px] border border-stroke
          ${errors[name] && touched[name] && "border-error text-error error-input"}
        `}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      >
        <option value=""> Choose </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select; 