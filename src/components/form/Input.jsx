import React from "react";

const Input = ({
    name,
    type,
    placeholder,
    value,
    handleChange,
    Icon,
    handleIconClick,
    buttonText,
    handleButtonClick,
}) => {
    return (
        <div className="input border border-stroke rounded-[12px] flex items-center gap-2 justify-between py-[12px] px-[16px]">
            <input 
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
                className="w-full text-white"
            />


            { Icon && (
                <Icon onClick={handleIconClick} className="text-primary text-base" />
            )}

            { buttonText && (
                <button className="bg-primary py-[8px] px-[12px] rounded-[4px] min-w-[fit-content] text-sm">
                    <span> { buttonText } </span>
                </button> 
            )}
        </div>
    )
}

export default Input;