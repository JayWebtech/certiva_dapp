import React from "react";
import { useFormikContext } from "formik";

const Button = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      type="button"
      className={`bg-primary text-black w-full px-[16px] py-[16px] rounded-[12px] font-[500]`}
      onClick={handleSubmit}
    >
      {title}
    </button>
  );
};

export default Button;
