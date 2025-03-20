import React, { useRef, useState } from "react";
import { useFormikContext } from "formik";

import { IoIosArrowDropdown } from "react-icons/io";
import { Label, Error } from ".";
import useOutsideClick from "@/hooks/useOutsideClick";

const CustomSelect = ({ 
    name, 
    placeholder = "Choose", 
    label, 
    options 
}) => {
    const selectRef = useRef();
    const { errors, touched, setFieldValue, values } = useFormikContext();
    
    
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => setOpen(!open);
    const handleClick = (option) => {
        setFieldValue(name, option);
        setOpen(false);
    }
    useOutsideClick([selectRef], ()=> setOpen(false));

    return (
        <div className="custom-select mb-5" ref={selectRef}>
            { label && (
                <Label
                    name={label} 
                    error={errors[name]} 
                    label={label}
                    visible={touched[name]}
                />
            )}
            <div className="custom-select-container relative">
                <div 
                    className={`custom-select-trigger py-[12px] px-[16px] border border-stroke cursor-pointer ${ open ? "rounded-t-[12px]" : "rounded-[12px]"}`}
                    onClick={toggleDropdown}
                >
                    <div className="flex items-center justify-between">
                        <p className={`text-base ${values[name] ? "text-white" : "text-[#5B5858]"}`}> { values[name] ? values[name] : placeholder } </p>
                        <IoIosArrowDropdown className="text-primary text-xl" />
                    </div>
                </div>


                { open && (
                    <div className="custom-select-dropdown text-white max-h-[360px] overflow-auto absolute bg-secondary w-full px-[16px] py-[12px] border border-stroke rounded-b-[12px] flex flex-col gap-2 z-[99]">
                        {options?.map((option, index)=> (
                            <div 
                                className="dropdown-item cursor-pointer" 
                                key={index}
                                onClick={()=> handleClick(option)}
                            >
                                <p> { option } </p>
                            </div>
                        ))}
                    </div> 
                )}
            </div>


            <Error 
                error={errors[name]}
                visible={touched[name]}
            />
        </div>
    )
}

export default CustomSelect;