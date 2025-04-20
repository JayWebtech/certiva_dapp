"use client";
import React, { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Certiva?",
    answer:
      "Certiva is a decentralized, blockchain-based degree verification system that allows universities to issue tamper-proof credentials, enabling real-time verification by employers and institutions.",
  },
  {
    question: "How does Certiva prevent fake degrees?",
    answer:
      "Universities register on-chain through ENS/DNS verification and issue blockchain-backed degrees, ensuring authenticity and eliminating credential fraud.",
  },
  {
    question: "How can employers verify a degree?",
    answer:
      "Employers can instantly verify degrees through Certiva's platform or API integration, reducing hiring risks and manual verification delays.",
  },
  {
    question: "Is student data kept private?",
    answer:
      "Yes. Certiva uses Zero-Knowledge Proofs and hashed student identifiers to protect privacy while ensuring secure verification.",
  },
  {
    question: "Can universities integrate Certiva with their existing systems?",
    answer: "Yes, Certiva provides APIs for seamless integration.",
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-primary font-bold text-3xl lg:text-5xl"
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col mt-8 gap-5"
      >
        {faqData.map(({ question, answer }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            className="border border-stroke px-6 py-4 rounded-lg hover:border-primary transition-colors duration-300"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="flex justify-between items-center gap-2"
            >
              <h4 className="text-primary sm:text-sm md:text-lg">{question}</h4>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoChevronDownCircleOutline
                  className="text-primary cursor-pointer"
                  size={30}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              </motion.div>
            </motion.div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white sm:text-sm md:text-lg sm:w-full md:w-[90%] mt-2 overflow-hidden"
                >
                  {answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
