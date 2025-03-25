"use client";
import { useState } from "react";
import Head from "next/head";

import { Button } from "@/components/form";
import Input from "@/components/form/Input";

export default function OTPVerification() {
	const [otp, setOtp] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle OTP verification logic here
		console.log("OTP verification attempt with:", otp);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-black text-white">
			<Head>
				<title>UniChain OTP Verification</title>
				<meta name="description" content="Verify your login with OTP" />
			</Head>

			<div className="w-full max-w-md p-8 space-y-8">
				<div className="text-center mb-10">
					<h1 className="text-4xl font-bold">
						<span className="text-white">uni</span>
						<span className="text-lime-400">chain</span>
					</h1>
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
						{/* <input
							id="otp"
							type="text"
							inputMode="numeric"
							pattern="[0-9]*"
							maxLength="6"
							required
							placeholder="123456"
							className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
							value={otp}
							onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
						/> */}
						<Input placeholder={"123456"} type={"text"} />
					</div>

					{/* <button
						type="submit"
						className="w-full py-3 px-4 bg-lime-400 hover:bg-lime-500 rounded-lg text-black font-medium transition duration-200"
					>
						Verify
					</button> */}
					<Button title={"Verify"} />
				</form>
			</div>
		</div>
	);
}
