import React from "react";
import { Button } from "../form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="text-white">
      <div className="mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
        <div className="flex items-center justify-center mt-[5em]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center py-[64px]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[2.5em] lg:text-[4em] text-center leading-none lg:leading-15 font-bold"
            >
              {" "}
              Revolutionizing<br></br>{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-primary"
              >
                Academic Credentials
              </motion.span>{" "}
              <br />{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                with Blockchain Technology.
              </motion.span>{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="my-5 max-w-2xl mx-auto text-center text-sm lg:text-xl"
            >
              {" "}
              Unichain ensures instant, secure academic credential verification
              using Starknet and Zero-Knowledge Proofs.{" "}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="hero-cta"
            >
              <div className="flex items-center justify-center gap-4 mt-4 max-w-[480px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Button
                    title="For universities"
                    variant="primary"
                    className="rounded-[100px] py-[16px]"
                    onClick={() => router.push("/signup")}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <Button
                    title="For employers"
                    variant="white"
                    className="rounded-[100px] py-[16px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
