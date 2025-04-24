import React from "react";
import { useFormikContext } from "formik";
import { LuLoaderCircle } from "react-icons/lu";

interface SubmitProps {
  title: string;
  loading?: boolean;
  Icon?: React.ElementType;
}

const Submit: React.FC<SubmitProps> = ({ title, loading = false, Icon }) => {
  const { handleSubmit } = useFormikContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <button
      type="button"
      className={`bg-primary text-black w-full px-[16px] py-[16px] rounded-[12px] font-[500] flex items-center justify-center gap-2`}
      onClick={handleClick}
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