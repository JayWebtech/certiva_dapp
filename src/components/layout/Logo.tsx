"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "text-2xl" }) => {
  return (
    <Link href="/">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${size} font-bold cursor-pointer`}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white"
        >
          Cer
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#A3FF50]"
        >
          tiva
        </motion.span>
      </motion.h2>
    </Link>
  );
};

export default Logo;
