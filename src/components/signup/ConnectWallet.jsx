import React from "react";
import Logo from "../layout/Logo";
import { Button } from "../form";
import AuthSideBar from "../layout/AuthSideBar";

const ConnectWallet = ({ changeStep }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl overflow-hidden">
      <div className="w-full p-2">
        <div className="mb-8">
          <Logo />
          <p className="text-dim">
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
          <p className="my-4 text-white text-sm">
            Verification successful! Please bind your wallet to enable secure
            login and access your dashboard in the future.
          </p>
        </div>
        <Button
          className="mt-8"
          title="Connect wallet"
          handleClick={changeStep}
        />
      </div>

      <div className="w-full">
        <AuthSideBar
          title="Connect Wallet"
          currentStep={4}
          totalSteps={4}
          showIndicators={true}
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
