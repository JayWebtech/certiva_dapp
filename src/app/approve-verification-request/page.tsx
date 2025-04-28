"use client";
import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "next/image";

interface VerificationProps {
  initialHash?: string;
}

const page: React.FC<VerificationProps> = ({ initialHash = "0x458586" }) => {
  const [hash] = useState<string>(initialHash);
  const [verificationKey, setVerificationKey] = useState<string>("");

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationKey(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left section  */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start justify-start">
          <div className="mb-6 md:mb-10">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-white">uni</span>
              <span className="text-[#A3FF50]">chain</span>
            </h1>
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              {hash} is requesting your approval to verify your degree
              certificate. Please grant them access.
            </p>
          </div>

          <div className="w-full">
            <div className="relative mb-4 md:mb-6">
              <input
                type="text"
                value={verificationKey}
                onChange={handleKeyChange}
                placeholder="Enter your Verification Key"
                className="w-full p-3 md:p-4 bg-black border border-gray-700 rounded-md text-white text-sm md:text-base"
              />
            </div>

            <div className="flex gap-4">
              <button className="w-1/2 py-3 md:py-4 rounded-md text-center text-sm md:text-base bg-[#A3FF50] text-black">
                Approve
              </button>
              <button className="w-1/2 py-3 md:py-4 rounded-md text-center text-sm md:text-base bg-red-600 text-white">
                Reject
              </button>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-hero bg-no-repeat w-full bg-[length:80%_100%] border-3 bg-top relative rounded-[150px] max-w-[500px] min-h-[500px] md:min-h-[600px] max-xl:hidden overflow-hidden">
          <div className="absolute inset-x-0 bottom-[90px] w-full z-10 flex justify-center">
            <p className="text-[#A3FF50] text-3xl font-extrabold text-center">
              Verify a Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
