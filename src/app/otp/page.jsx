"use client";
import { useState } from "react";
import Head from "next/head";

import { Button } from "@/components/form";
import Input from "@/components/form/Input";
import Logo from "@/components/layout/Logo";
import Navbar from "@/components/layout/Navbar";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP verification attempt with:", otp);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="w-full max-w-2xl p-8 space-y-8">
          <div className="text-center mb-10">
            <Logo size="text-4xl" />
            <div className="mt-4 text-gray-400">
              <p>An OTP was sent to your email.</p>
              <p>Please enter the OTP to verify login</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium mb-2">
                OTP
              </label>
              <Input placeholder={"123456"} type={"text"} />
            </div>
            <Button title={"Verify"} />
          </form>
        </div>
      </div>
    </div>
  );
}
