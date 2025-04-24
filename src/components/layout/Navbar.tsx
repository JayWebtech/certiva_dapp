"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

interface NavlinkProps {
  url: string;
  title: string;
}

const Navlink: React.FC<NavlinkProps> = ({ url, title }) => {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      className="text-sm hover:text-primary transition-colors duration-300"
    >
      <Link href={url}>{title}</Link>
    </motion.li>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar text-white container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center justify-between border border-stroke py-[12px] px-[16px] rounded-[20px]"
      >
        <div className="nav-logo">
          <Logo />
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:flex items-center justify-center gap-8"
        >
          <Navlink url="/" title="Use cases" />
          <Navlink url="/" title="Demo" />
          <Navlink url="/" title="Developers" />
          <Navlink url="/" title="Our solutions" />
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden lg:flex items-center justify-end gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/login"
            className="bg-primary text-black py-[8px] px-[24px] rounded-[8px] text-sm"
          >
            Sign in
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="bg-white text-black px-[24px] py-[8px] rounded-[8px] text-sm"
          >
            Verify A Degree
          </motion.a>
        </motion.div>

        <div className="lg:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {!open ? (
              <IoIosMenu
                className="text-white text-[1.5em]"
                onClick={() => setOpen(true)}
              />
            ) : (
              <MdClose
                className="text-white text-[1.5em]"
                onClick={() => setOpen(false)}
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-stroke py-[12px] px-[16px] rounded-[20px] lg:hidden mt-[12px] overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="py-4 px-4"
            >
              <ul className="flex flex-col gap-2">
                <Navlink url="/" title="Use cases" />
                <Navlink url="/" title="Demo" />
                <Navlink url="/" title="Developers" />
                <Navlink url="/" title="Our solutions" />
              </ul>

              <div className="flex flex-col gap-2 mt-[16px]">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/"
                  className="bg-primary text-black py-[8px] px-[24px] rounded-[8px] text-sm text-center"
                >
                  Sign in
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/"
                  className="bg-white text-black px-[24px] py-[8px] rounded-[8px] text-sm text-center"
                >
                  Verify A Degree
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
