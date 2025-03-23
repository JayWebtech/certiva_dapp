import { Button } from "../form";
import Input from "../form/Input";
import AuthSideBar from "../layout/AuthSideBar";
import { Formik, Form } from "formik";
import Logo from "../layout/Logo";

export default function AdminstrationInformation({ changeStep }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 rounded-3xl overflow-hidden">
      <div className="w-full p-2">
        <div className="mb-8">
          <Logo />
          <p className="text-dim">
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
        </div>

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
            <div>
              <label htmlFor="fullname" className="block mb-2 text-white">
                Fullname
              </label>
              <Input id="fullname" name="fullname" placeholder="e.g John Doe" />
            </div>

            <div>
              <label
                htmlFor="universityEmail"
                className="block mb-2 text-white"
              >
                University email
              </label>
              <Input
                id="universityEmail"
                name="universityEmail"
                placeholder="e.g admin@harvard.edu"
              />
            </div>

            <div>
              <label htmlFor="jobTitle" className="block mb-2 text-white">
                Job Title/Designation
              </label>
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="e.g., Registrar, Academic Dean, IT Admin"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block mb-2 text-white">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="xxxxxx"
              />
            </div>

            <Button
              type="submit"
              className="mt-8"
              title="Next step"
              handleClick={changeStep}
            />
          </Form>
        </Formik>
      </div>

      <div className="w-full bg-black">
        <AuthSideBar
          title="Administrator Details"
          currentStep={2}
          totalSteps={4}
          showIndicators={true}
        />
      </div>
    </div>
  );
}
