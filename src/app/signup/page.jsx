"use client";
import { useState } from "react";
import UniversityDetails from "@/components/signup/UniversityDetails";
import AdminstrationInformation from "@/components/signup/AdminstrationInformation";

export default function SignUp() {
  const [step, setStep] = useState(1);

  const changeStep = () => {
    setStep(step + 1);
  };
  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5 flex flex-col items-center justify-center h-screen overflow-y-auto">
      {step === 1 && <UniversityDetails changeStep={changeStep} />}
      {step === 2 && <AdminstrationInformation changeStep={changeStep} />}
    </div>
  );
}
