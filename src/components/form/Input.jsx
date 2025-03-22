import React from 'react';

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
  error,
  touched,
}) => {
  return (
    <div className='w-full'>
      <div className='input border border-stroke rounded-[12px] flex items-center gap-2 justify-between py-[12px] px-[16px]'>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          className={`w-full text-white ${
            touched && error ? 'border-red-500' : 'border-zinc-700'
          }`}
        />

        {Icon && (
          <Icon onClick={handleIconClick} className='text-primary text-base' />
        )}

        {buttonText && (
          <button
            className='bg-primary py-[8px] px-[12px] rounded-[4px] min-w-[fit-content] text-sm cursor-pointer'
            onClick={handleButtonClick}
          >
            <span> {buttonText} </span>
          </button>
        )}
      </div>
      {touched && error && (
        <div className='text-red-500 text-sm mt-1'>{error}</div>
      )}
    </div>
  );
};

export default Input;
