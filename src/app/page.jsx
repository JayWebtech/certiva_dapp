"use client";

import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-white"> Home page </h1>
    </div>
  );
}
