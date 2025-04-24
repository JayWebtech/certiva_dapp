"use client";

import React from "react";
import AuthSideBar from "../layout/AuthSideBar";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import Logo from "../layout/Logo";
import { motion } from "framer-motion";

const Authentication = ({ changeStep }: { changeStep: () => void }) => {
  const txtRecord = "cb4b2af445a8a5e0d5b8f6f5d2c";

  const handleDownload = () => {
    const blob = new Blob([txtRecord], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Certiva_txt_record.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl overflow-hidden w-full justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full p-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Logo size="text-4xl" />
          <p className="text-dim">
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
          <div className="w-full text-left my-6">
            <p className="text-white text-sm">
              Download and add this TXT record to the university domain
            </p>
          </div>
        </motion.div>

        <div className="w-full space-y-4">
          <div className="relative w-full">
            <Input
              type="text"
              value={txtRecord}
              readOnly
              className="pr-12 font-mono" name={""} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              } }            />
            <button
              onClick={handleDownload}
              className="absolute rounded-[20px] right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-[#A3FF50]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          <Button
            type="submit"
            className="mt-8"
            title="Verify"
            handleClick={changeStep}
          />
        </div>
      </motion.div>
      <AuthSideBar
        title="Authentication & Security"
        currentStep={3}
        showIndicators={true}
        totalSteps={4}
      />
    </div>
  );
};

export default Authentication;
