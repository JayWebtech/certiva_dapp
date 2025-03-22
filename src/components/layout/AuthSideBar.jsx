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
      className={`auth-sidebar hero-section2 h-full w-full flex flex-col items-center justify-center relative ${className}`}
      
    >
      <div className="flex flex-col items-center justify-center p-8 w-full max-w-md">
        {/* Image */}
        <div className="mb-16 relative">
            <Image
              src="/Illus.svg"
              width={588}
              height={588}
              alt="Illustration"
              className="w-72 h-72 object-contain"
            />
        </div>

        {/* Title */}
        <h2 className="text-[#c1ff72] text-3xl font-bold mb-8">{title}</h2>

        {/* Step Indicators */}
        {showIndicators && (
          <div className="flex space-x-3 mt-4">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index + 1 === currentStep ? "bg-[#c1ff72]" : index + 1 < currentStep ? "bg-white" : "bg-white"
                }`}
                aria-current={index + 1 === currentStep ? "step" : undefined}
              />
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

export default AuthSideBar

