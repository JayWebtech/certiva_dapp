import React from "react";
import { motion } from "framer-motion";
import Logo from "../layout/Logo";
import { Button } from "../form";
import AuthSideBar from "../layout/AuthSideBar";

const ConnectWallet = ({ changeStep }: { changeStep: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full p-2">
        <motion.div className="mb-8" variants={itemVariants}>
          <Logo size="text-4xl" />
          <motion.p className="text-dim" variants={itemVariants}>
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </motion.p>
          <motion.p className="my-4 text-white text-sm" variants={itemVariants}>
            Verification successful! Please bind your wallet to enable secure
            login and access your dashboard in the future.
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            className="mt-8"
            title="Connect wallet"
            handleClick={changeStep}
          />
        </motion.div>
      </div>

      <motion.div className="w-full" variants={itemVariants}>
        <AuthSideBar
          title="Connect Wallet"
          currentStep={4}
          showIndicators={true}
          totalSteps={4}
        />
      </motion.div>
    </motion.div>
  );
};

export default ConnectWallet;
