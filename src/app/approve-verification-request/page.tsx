"use client";
import React, { useState } from "react";
import Logo from "@/components/layout/Logo";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import { motion } from "framer-motion";

export default function Page() {
  const initialHash = "0x458586";
  const [hash] = useState<string>(initialHash);
  const [verificationKey, setVerificationKey] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationKey(e.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(verificationKey);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left section  */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start justify-start">
          <div className="mb-6 md:mb-10">
            <Logo size="text-5xl" />
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              {hash} is requesting your approval to verify your degree
              certificate. Please grant them access.
            </p>
          </div>

          <div className="w-full">
            <div className="relative mb-4 md:mb-6">
              <Input
                name="email"
                placeholder="Enter your verification key"
                type="text"
                handleChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <Button title="Approve" variant="primary" className="w-1/2" />
              <Button title="Reject" variant="error" className="w-1/2" />
            </div>
          </div>
        </div>

        {/* Right section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-hero bg-no-repeat w-full bg-[length:80%_100%] border-3 bg-top relative rounded-[150px] max-w-[500px] min-h-[500px] md:min-h-[600px] max-xl:hidden overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute inset-x-0 bottom-[90px] w-full z-10 flex justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[#A3FF50] text-3xl font-extrabold text-center"
            >
              Approve Verification
            </motion.p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/img/cube.svg"
            alt="3D Cube"
            className="w-[20em] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
}
