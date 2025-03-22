import React from "react";
import Image from "next/image";

const AuthSideBar = ({
  title = "University Details",
  currentStep = 1,
  totalSteps = 3,
  showIndicators = true,
  children,
  className = "",
}) => {
  return (
    <div
      className={`auth-sidebar h-full w-full flex flex-col items-center py-20 justify-center relative border-2 border-stroke rounded-[30px] ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <img src="/img/cube.svg" alt="" className="w-[20em]" />

        <h2 className="text-primary text-3xl font-bold">{title}</h2>
        {showIndicators && (
          <div className="flex space-x-3">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index + 1 === currentStep
                    ? "bg-primary"
                    : index + 1 < currentStep
                      ? "bg-white"
                      : "bg-white"
                }`}
                aria-current={index + 1 === currentStep ? "step" : undefined}
              />
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default AuthSideBar;
