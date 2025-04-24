import React from "react";

interface ErrorProps {
  error?: string;
  visible?: boolean;
}

const Error: React.FC<ErrorProps> = ({ error, visible }) => {
  if (!visible) return null;
  return <p className="text-sm text-error"> {error} </p>;
};

export default Error; 