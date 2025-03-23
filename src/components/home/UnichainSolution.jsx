import { motion } from "framer-motion";

const Step = ({ stepNumber, primaryText, secondaryText, isLastStep, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
    >
      <div className="flex items-start gap-x-4">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            className="w-12 h-12 flex items-center justify-center bg-primary text-black font-bold text-xl rounded-full"
          >
            {stepNumber}
          </motion.div>
          {isLastStep ? null : (
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "4rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              className="h-16 w-1 bg-primary"
            />
          )}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
          className="text-base"
        >
          <p className="font-semibold">{primaryText}</p>
          <p className="text-dim">{secondaryText}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

function SolutionTimeline() {
  return (
    <div className="flex flex-col items-start py-6 text-white">
      <Step
        stepNumber={1}
        primaryText={"Universities Register & Issue Degrees"}
        secondaryText={"(ENS/DNS verified, on-chain storage)"}
        index={0}
      />
      <Step
        stepNumber={2}
        primaryText={"Graduates Receive Secure Credentials"}
        secondaryText={"(Unique Degree ID, ZK-Proofs for Privacy)"}
        index={1}
      />
      <Step
        stepNumber={3}
        primaryText={"Employers & Institutions Instantly Verify"}
        secondaryText={"(Real-time blockchain verification)"}
        isLastStep
        index={2}
      />
    </div>
  );
}

export default function UnichainSolution() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-white py-5 lg:py-20 flex flex-col lg:flex-row lg:items-center"
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:basis-1/2 grow"
      >
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-primary text-3xl lg:text-5xl font-bold"
        >
          The Unichain Solution
        </motion.h4>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl mt-2"
        >
          Seamless, Secure, and Instant Verification
        </motion.p>

        <div className="mt-8">
          <SolutionTimeline />
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="basis-1/2 items-center justify-center flex lg:flex"
      >
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          src={"/img/globe.png"} 
          className="w-[50%] lg:w-[80%] h-auto" 
        />
      </motion.div>
    </motion.div>
  );
}
