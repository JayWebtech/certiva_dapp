import { motion } from "framer-motion";
import React from "react";

class BeneficiaryCard {
  title: string;
  items: string[];

  constructor(title: string, items: string[]) {
    this.title = title;
    this.items = items;
  }
}

const CARDS: BeneficiaryCard[] = [
  new BeneficiaryCard("For universities", [
    "Issue verified, tamper-proof degrees",
    "Protect reputation & combat fraud",
    "Improve graduate employability",
  ]),
  new BeneficiaryCard("For Employers & HR Platforms", [
    "Instantly verify academic credentials",
    "Reduce hiring risks & compliance issues",
    "Integrate verification via API",
  ]),
  new BeneficiaryCard("For Students & Graduates", [
    "Own and share verifiable degrees",
    "No paperwork, no delays",
    "Protect your academic reputation",
  ]),
  new BeneficiaryCard("For Developers", [
    "Build on Certiva's API",
    "Secure integrations for EdTech & HR platforms",
    "Open-source development opportunities",
  ]),
];

const WhoCanBenefit: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-white py-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-primary text-3xl lg:text-5xl font-bold"
      >
        Who Can Benefit?{" "}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl mt-2"
      >
        Bringing Trust, Speed, and Security to Academic Credentials{" "}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col gap-4 md:gap-6 md:grid grid-cols-2 grid-rows-2 mt-10 grid-flow-row-dense"
      >
        {CARDS.map((c, index) => (
          <motion.div
            key={c.title + index.toString()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="py-6 px-6 border-[1px] border-[#393131] rounded-2xl text-white relative hover:border-primary transition-colors duration-300"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="text-2xl text-primary font-bold"
            >
              {c.title}
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="mt-4 list-disc px-6 leading-loose"
            >
              {c.items.map((item, itemIndex) => (
                <motion.li
                  key={"a " + itemIndex.toString()}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8 + index * 0.1 + itemIndex * 0.1,
                    duration: 0.5,
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              src={"/img/pentagons.svg"}
              alt="Pentagons Background"
              className="absolute bottom-2 right-2 w-[160px] h-[auto]"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WhoCanBenefit; 