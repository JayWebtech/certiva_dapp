"use client";
import { useState } from "react";
import UniversityDetails from "@/components/signup/UniversityDetails";
import AdminstrationInformation from "@/components/signup/AdminstrationInformation";
import { motion, AnimatePresence } from "framer-motion";

export default function SignUp() {
  const [step, setStep] = useState(1);

  const changeStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5 flex flex-col items-center justify-center h-screen overflow-y-auto">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <UniversityDetails changeStep={changeStep} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <AdminstrationInformation changeStep={changeStep} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
