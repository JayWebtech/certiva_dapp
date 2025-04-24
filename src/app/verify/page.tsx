import React from "react";
import { Button } from "@/components/form";
import Logo from "@/components/layout/Logo";
import Navbar from "@/components/layout/Navbar";

const Verify = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="w-full max-w-2xl p-8 space-y-8">
          <div className="text-center mb-10">
            <Logo size="text-4xl" />
            <p className="mt-4 text-gray-400">
              Validate login by connecting your wallet
            </p>
          </div>
          <Button title="Connect Wallet" />
        </div>
      </div>
    </div>
  );
};
export default Verify;
