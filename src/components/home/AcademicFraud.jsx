import { motion } from "framer-motion";

class AcademicCard {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
const CARDS = [
  new AcademicCard(
    "⏳ Manual Verification is Slow & Inefficient",
    "Traditional processes take weeks, delaying hiring and increasing costs.",
  ),
  new AcademicCard(
    "📜 Fake Degrees Cost Companies Millions",
    "Fraudulent credentials lead to unqualified hires, financial losses, and compliance risks.",
  ),
  new AcademicCard(
    "🔐 Privacy Concerns in Traditional Systems",
    "Fraudulent credentials lead to unqualified hires, financial losses, and compliance risks.",
  ),
  new AcademicCard(
    "🔐 Privacy Concerns in Traditional Systems",
    "Fraudulent credentials lead to unqualified hires, financial losses, and compliance risks.",
  ),
];

export default function AcademicFraudSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-white py-5 lg:py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl lg:text-3xl font-bold"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-primary"
        >
          Academic Fraud
        </motion.span>
        <span> is a</span>
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-3xl lg:text-5xl font-bold"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-primary"
        >
          $1 Billion+
        </motion.span>
        <span> Problem</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col gap-4 md:gap-6 md:grid grid-cols-2 grid-rows-2 mt-10 grid-flow-row-dense"
      >
        {CARDS.map((c, index) => (
          <motion.div
            key={c.title + index.toString()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            className="py-6 px-6 border-[1px] border-stroke rounded-2xl hover:border-primary transition-colors duration-300"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="text-xl text-primary font-bold"
            >
              {c.title}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="mt-4 md:text-lg"
            >
              {c.content}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
