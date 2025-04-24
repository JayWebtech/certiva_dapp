"use client";
import { useState } from "react";
import Head from "next/head";
import Input from "@/components/form/Input";
import { Button } from "@/components/form";
import Logo from "@/components/layout/Logo";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="w-full max-w-2xl p-8 space-y-8">
          <div className="text-center mb-10">
            <Logo size="text-4xl" />
            <p className="mt-4 text-gray-400">
              Enter your login credentials to access your dashboard
            </p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              University Email
            </label>
            <Input 
              name="email"
              placeholder="eg. admin@mail.com" 
              type="email"
              handleChange={() => {}}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <Input 
              name="password"
              placeholder="*********" 
              type="password"
              handleChange={() => {}}
            />
          </div>
          <Button title="Login" handleClick={() => router.push("/otp")} />
        </div>
      </div>
    </div>
  );
};

export default Login; 