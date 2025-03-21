import React from "react";

const Button = ({
  title,
  handleClick,
  variant = "primary",
  size = "md",
  Icon,
  iconPosition = "right",
  className = "",
  style = {},
  ...otherProps
}) => {
  const baseStyles =
    "w-full font-medium flex items-center justify-center gap-2 rounded-[12px] transition-all duration-300";

  const variantStyles = {
    primary: "bg-primary text-black",
    secondary: "bg-secondary text-white",
    error: "bg-error text-white",
    white: "bg-white text-black",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className} whitespace-nowrap cursor-pointer`}
      onClick={handleClick}
      style={style}
      {...otherProps}
    >
      {Icon && iconPosition === "left" && <Icon />}
      {title}
      {Icon && iconPosition === "right" && <Icon />}
    </button>
  );
};

export default Button;
