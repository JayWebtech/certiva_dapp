"use client";
import { useState } from "react";
import Head from "next/head";
import Input from "@/components/form/Input";
import { Button } from "@/components/form";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Login attempt with:", { email, password });
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-black text-white">
			<Head>
				<title>UniChain Login</title>
				<meta name="description" content="Login to UniChain dashboard" />
			</Head>

			<div className="w-full max-w-md p-8 space-y-8">
				<div className="text-center mb-10">
					<h1 className="text-4xl font-bold">
						<span className="text-white">uni</span>
						<span className="text-lime-400">chain</span>
					</h1>
					<p className="mt-4 text-gray-400">
						Enter your login credentials to access your dashboard
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-2">
							University Email
						</label>
						{/* <input
							id="email"
							type="email"
							required
							placeholder="e.g admin@harvard.edu"
							className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/> */}
						<Input placeholder={"eg. admin@mail.com"} type={"email"} />
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium mb-2"
						>
							Password
						</label>
						{/* <input
							id="password"
							type="password"
							required
							placeholder="••••••••••"
							className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/> */}
						<Input placeholder={"*********"} type={"password"} />
					</div>

					{/* <button
						type="submit"
						className="w-full py-3 px-4 bg-[#A3FF50] hover:bg-lime-500 rounded-lg text-black font-medium transition duration-200"
					>
						Login
					</button> */}
					<Button title={"Login"} />
				</form>
			</div>
		</div>
	);
}
