import React from "react";
import { motion } from "framer-motion";

const AuthSideBar = ({
  title = "University Details",
  currentStep = 1,
  totalSteps = 4,
  showIndicators = true,
  children,
  className = "",
}: {
  title: string;
  currentStep: number;
  totalSteps: number;
  showIndicators: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`auth-sidebar hidden lg:flex h-full w-full flex-col items-center py-20 justify-center relative border-2 border-stroke rounded-[30px] ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src="/img/cube.svg"
          alt=""
          className="w-[20em]"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-primary text-3xl font-bold"
        >
          {title}
        </motion.h2>
        {showIndicators && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex space-x-3"
          >
            {Array.from({ length: totalSteps }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
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
          </motion.div>
        )}

        {children}
      </div>
    </motion.div>
  );
};

export default AuthSideBar;
