import React from "react";
import { useFormikContext } from "formik";
import { LuLoaderCircle } from "react-icons/lu";

const Submit = ({ title, loading = false, Icon }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      type="button"
      className={`bg-primary text-black w-full px-[16px] py-[16px] rounded-[12px] font-[500] flex items-center justify-center gap-2`}
      onClick={handleSubmit}
    >
      {loading ? (
        <LuLoaderCircle className="animate-spin delay-150ms text-xl" />
      ) : (
        <>
          <span> {title} </span>
          {Icon && <Icon className="text-lg" />}
        </>
      )}
    </button>
  );
};

export default Submit;
