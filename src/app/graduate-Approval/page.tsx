"use client";
import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "@/components/layout/Logo";
import Button from "@/components/form/Button";

export default function Page() {
  const initialHash = "0x3333";
  const [hash, setHash] = useState<string>(initialHash);
  const [isWaiting, setIsWaiting] = useState<boolean>(true);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleApprove = () => {
    setIsWaiting(false);
    setIsVerified(true);
  };

  const handleHashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHash(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://unichain.com/approve-verification/?hash=${hash}`
    );
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left section  */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start justify-start">
          <div className="mb-6 md:mb-10">
            <Logo size="text-5xl" />

            <p className="text-gray-400 text-xs md:text-sm mt-2">
              Please send this link to the degree owner to approve this
              verification exercise
            </p>
          </div>

          <div className="w-full">
            <div className="relative mb-4 md:mb-6">
              <input
                type="text"
                value={`https://unichain.com/approve-verification/?hash=${hash}`}
                onChange={handleHashChange}
                className="w-full p-3 md:p-4 bg-black border border-gray-700 rounded-md text-white text-sm md:text-base pr-12"
                readOnly
              />
              <button
                onClick={copyToClipboard}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <MdOutlineContentCopy className="text-white" />
              </button>
            </div>

            <Button
              title={isWaiting
                ? "Waiting for Graduate's approval"
                : isVerified
                  ? "Verification Approved"
                  : "Verify"}
              variant={isWaiting
                ? "primary"
                : isVerified
                  ? "secondary"
                  : "white"}
              handleClick={handleApprove}
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
