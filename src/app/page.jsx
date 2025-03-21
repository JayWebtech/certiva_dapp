"use client";
import Navbar from "@/components/layout/Navbar";
import Faq from "../components/home/Faq";
import Footer from "../components/layout/Footer";

import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <div className="hero-section h-screen w-full">
        <Navbar />
        <Hero />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}
