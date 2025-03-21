"use client";
import React, { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const faqData = [
  {
    question: "What is UniChain?",
    answer:
      "UniChain is a decentralized, blockchain-based degree verification system that allows universities to issue tamper-proof credentials, enabling real-time verification by employers and institutions.",
  },
  {
    question: "How does UniChain prevent fake degrees?",
    answer:
      "Universities register on-chain through ENS/DNS verification and issue blockchain-backed degrees, ensuring authenticity and eliminating credential fraud.",
  },
  {
    question: "How can employers verify a degree?",
    answer:
      "Employers can instantly verify degrees through UniChain’s platform or API integration, reducing hiring risks and manual verification delays.",
  },
  {
    question: "Is student data kept private?",
    answer:
      "Yes. UniChain uses Zero-Knowledge Proofs and hashed student identifiers to protect privacy while ensuring secure verification.",
  },
  {
    question:
      "Can universities integrate UniChain with their existing systems?",
    answer: "Yes, UniChain provides APIs for seamless integration.",
  },
  {
    question: "What are the benefits for students?",
    answer:
      "Students get verifiable, blockchain-backed degrees that can be instantly shared with employers worldwide.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h1 className="text-primary font-bold sm:text-[42px] md:text-4xl py-5">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-5">
        {faqData.map(({ question, answer }, index) => (
          <div
            key={index}
            className="border border-stroke px-6 py-4 rounded-lg"
          >
            <div className="flex justify-between items-center gap-2">
              <h4 className="text-primary sm:text-sm md:text-lg">{question}</h4>
              <div>
                <IoChevronDownCircleOutline
                  className={`text-primary cursor-pointer transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={30}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              </div>
            </div>
            {openIndex === index && (
              <p className="text-white sm:text-sm md:text-lg sm:w-full md:w-[90%] mt-2">
                {answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
