"use client";
import Navbar from "@/components/layout/Navbar";
import AcademicFraudSection from "@/components/home/AcademicFraud";
import Faq from "../components/home/Faq";
import Footer from "../components/layout/Footer";
import CertivaSolution from "@/components/home/CertivaSolution";
import WhoCanBenefit from "@/components/home/WhoCanBenefit";
import NextTopLoader from "nextjs-toploader";
import Hero from "@/components/home/Hero";

export default function Home(): JSX.Element {
  return (
    <div>
      <NextTopLoader color="#A3FF50" speed={500} />
      <div className="hero-section h-screen w-full">
        <Navbar />
        <Hero />
      </div>
      <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5">
        <AcademicFraudSection />
        <CertivaSolution />
        <WhoCanBenefit />
        <Faq />
      </div>
      <Footer />
    </div>
  );
} 