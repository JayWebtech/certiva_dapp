"use client";
import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "next/image";

interface VerificationProps {
  initialHash?: string;
}

const page: React.FC<VerificationProps> = ({
  initialHash = "0xA23B...E9F3",
}) => {
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
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-white">uni</span>
              <span className="text-[#A3FF50]">chain</span>
            </h1>
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

            <button
              onClick={handleVerify}
              className="w-full py-3 md:py-4 rounded-md text-center text-sm md:text-base bg-[#A3FF50] text-black font-medium"
            >
              Verify
            </button>
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
