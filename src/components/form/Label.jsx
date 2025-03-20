import React from "react";

const Label = ({ error, label, name, visible }) => {
    return (
        <label 
            className={`text-base font-[500] text-white mb-[4px] block ${ error && visible && "text-error"}`} 
            id={name}
        > 
            { label } 
        </label>
    )
}

export default Label;