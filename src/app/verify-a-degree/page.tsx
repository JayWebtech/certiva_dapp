"use client";
import React, { useState } from "react";
import Logo from "@/components/layout/Logo";
import { motion } from "framer-motion";
import Button from "@/components/form/Button";

export default function Page() {
  const initialHash = "0xA23B...E9F3";
  const [hash, setHash] = useState<string>(initialHash);

  const handleHashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHash(e.target.value);
  };

  const handleVerify = () => {
    // Verification logic would go here
    console.log("Verifying hash:", hash);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-[100px]">
        {/* Left section  */}
        <div className="w-full md:w-1/3 p-4 md:p-8 flex flex-col items-start justify-start">
          <div className="mb-6 md:mb-10">
            <Logo size="text-5xl" />
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              The degree verification process on Unichain ensures the
              authenticity of a degree issued on the blockchain.
            </p>
          </div>

          <div className="w-full">
            <label className="text-white text-sm mb-2 block">
              Degree ID / Hash
            </label>
            <div className="relative mb-4 md:mb-6">
              <input
                type="text"
                value={hash}
                onChange={handleHashChange}
                className="w-full p-3 md:p-4 bg-black border border-gray-700 rounded-md text-white text-sm md:text-base"
              />
            </div>

            <Button
              title="Verify"
              variant="primary"
              handleClick={handleVerify}
              className="w-full"
            />
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
