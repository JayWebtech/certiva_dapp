import React from "react";
import { useFormikContext } from "formik";

const Submit = ({
    title,
}) => {
    const { handleSubmit } = useFormikContext();

    return (
        <button 
            type="button" 
            className={`bg-primary text-black w-full px-[16px] py-[16px] rounded-[12px] font-[500] `} 
            onClick={handleSubmit}
        >
            { title }
        </button>
    )
}

export default Submit;