"use client";
import Navbar from "@/components/layout/Navbar";
import AcademicFraudSection from "@/components/home/AcademicFraud";
import Faq from "../components/home/Faq";
import Footer from "../components/layout/Footer";
import UnichainSolution from "@/components/home/UnichainSolution";
import WhoCanBenefit from "@/components/home/WhoCanBenefit";

import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <div className="hero-section h-screen w-full">
        <Navbar />
        <Hero />
      </div>
      <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5">
        <AcademicFraudSection />
        <UnichainSolution />
        <WhoCanBenefit />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}
