"use client";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import { CustomSelect } from "../form";
import AuthSideBar from "../layout/AuthSideBar";
import { Formik, Form } from "formik";
import Logo from "../layout/Logo";
import { motion } from "framer-motion";

export default function UniversityDetails({ changeStep }) {
  const countries = ["Nigeria", "USA", "UK", "Canada"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full p-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Logo />
          <p className="text-dim">
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
        </motion.div>
        <Formik
          initialValues={{
            country: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label
                htmlFor="university-name"
                className="block mb-2 text-white"
              >
                University name
              </label>
              <Input id="university-name" placeholder="e.g Harvard" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label
                htmlFor="official-domain"
                className="block mb-2 text-white"
              >
                Official Domain
              </label>
              <Input id="official-domain" placeholder="e.g www.harvard.edu" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              <label htmlFor="country" className="block mb-2 text-white">
                Country
              </label>
              <CustomSelect name="country" options={countries} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label htmlFor="accreditation" className="block mb-2 text-white">
                Accreditation Body (Optional)
              </label>
              <Input
                id="accreditation"
                placeholder="e.g U.S. Department of Education"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                className="mt-8"
                title="Next step"
                handleClick={changeStep}
              />
            </motion.div>
          </Form>
        </Formik>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <AuthSideBar
          title="University Details"
          currentStep={1}
          totalSteps={4}
          showIndicators={true}
        />
      </motion.div>
    </div>
  );
}
