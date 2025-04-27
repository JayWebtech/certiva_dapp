"use client";
import Input from "@/components/form/Input";
import { Button } from "@/components/form";
import Logo from "@/components/layout/Logo";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LadyCertified from "../../../public/img/lady-with-certificate.png";
import { useState, Dispatch, SetStateAction } from "react";

const Login: React.FC<{ setOtp: Dispatch<SetStateAction<boolean | null>> }> = ({
  setOtp,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
    setOtp(true);
  };

  return (
    <>
      <div className="mb-10">
        <Logo size="text-5xl" />
        <p className="mt-4 text-white text-2xl">
          Enter your login credentials to access your dashboard{" "}
        </p>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          name="email"
          placeholder="eg. admin@harvad.edu"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <Input
          name="password"
          placeholder="*********"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button title="Login" handleClick={handleLogin} />
    </>
  );
};

const Otp: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="mb-10">
        <Logo size="text-5xl" />
        <p className="mt-4 text-white text-2xl">
          An OTP was sent to your email
          <br className="block" />
          Please enter the OTP to verify login
        </p>
      </div>

      <div>
        <label htmlFor="otp" className="block text-sm font-medium mb-2">
          OTP
        </label>
        <Input
          name="otp"
          placeholder="123456"
          type="text"
          handleChange={() => {}}
        />
      </div>
      <Button
        title="Verify"
        handleClick={() => router.push("/admin/dashboard")}
      />
    </>
  );
};

const AdminLogin: React.FC = () => {
  const [otp, setOtp] = useState<null | boolean>(null);

  return (
    <div className="sm:grid sm:grid-cols-[1.3fr_1fr] h-screen bg-black text-white">
      <div className="flex flex-col mx-auto w-full md:max-w-[700px] justify-center px-6 py-8 sm:px-10 space-y-8 h-full">
        {otp ? <Otp /> : <Login setOtp={setOtp} />}
      </div>

      <div className="bg-white overflow-hidden hidden sm:block">
        <div className="relative w-full h-full">
          <Image
            priority
            src={LadyCertified}
            width={1000}
            height={1000}
            alt="Lady with certificate"
            className="object-cover  w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
