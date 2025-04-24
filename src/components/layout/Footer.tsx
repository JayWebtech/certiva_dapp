import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { RiDiscordLine, RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface Social {
  Icon: JSX.Element;
  Link: string;
}

const socials: Social[] = [
  { Icon: <RiTwitterXFill />, Link: "#" },
  { Icon: <TbBrandFacebook />, Link: "#" },
  { Icon: <RiDiscordLine />, Link: "#" },
];

const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[url('/img/footer-wave.png')]"
    >
      <div className="container mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:mt-7 md:mt-15 justify-center gap-6  text-primary bg-fit bg-center bg-no-repeat min-h-[500px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="logo"
          >
            <img src="img/logo.svg" alt="Logo" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-[26px]"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white"
            >
              Temper-proof, Blockchain-Backed Degrees
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white"
            >
              Verified in Real Time
            </motion.p>
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.Link}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.5,
                  rotate: { duration: 0.5 },
                }}
                className="bg-primary text-secondary text-4xl h-[70px] w-[70px] rounded-full flex justify-center items-center"
              >
                {social.Icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer; 