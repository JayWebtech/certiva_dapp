import { Button } from "../form";
import Input from "../form/Input";
import AuthSideBar from "../layout/AuthSideBar";
import { Formik, Form } from "formik";
import Logo from "../layout/Logo";
import { motion } from "framer-motion";

export default function AdminstrationInformation({ changeStep }: { changeStep: () => void }) {
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
          <Logo size="text-4xl" />
          <p className="text-dim">
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
        </motion.div>

        <Formik
          initialValues={{
            fullname: "",
            universityEmail: "",
            jobTitle: "",
            phoneNumber: "",
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
              <label htmlFor="fullname" className="block mb-2 text-white">
                Fullname
              </label>
              <Input name="fullname" placeholder="e.g John Doe" type={""} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              } } />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label
                htmlFor="universityEmail"
                className="block mb-2 text-white"
              >
                University email
              </label>
              <Input
                name="universityEmail"
                placeholder="e.g admin@harvard.edu" type={""} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error("Function not implemented.");
                } }              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="jobTitle" className="block mb-2 text-white">
                Job Title/Designation
              </label>
              <Input
                name="jobTitle"
                placeholder="e.g., Registrar, Academic Dean, IT Admin" type={""} handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error("Function not implemented.");
                } }              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label htmlFor="phoneNumber" className="block mb-2 text-white">
                Password
              </label>
              <Input
                name="password"
                type="password"
                placeholder="xxxxxx" handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error("Function not implemented.");
                } }              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button
                type="submit"
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
        className="w-full bg-black"
      >
        <AuthSideBar
          title="Administrator Details"
          currentStep={2}
          showIndicators={true}
          totalSteps={4}
        />
      </motion.div>
    </div>
  );
}
