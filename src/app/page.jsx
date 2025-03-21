import Faq from "../components/home/Faq";
import Footer from "../components/layout/Footer";
"use client";

import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Faq />
      <Footer />
      <Navbar />
      <Hero />
      <h1 className="text-white"> Home page </h1>
    </div>
  );
}
