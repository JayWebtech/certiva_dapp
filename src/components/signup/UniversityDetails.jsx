"use client";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import { CustomSelect } from "../form";
import AuthSideBar from "../layout/AuthSideBar";
import { Formik, Form } from "formik";
import Logo from "../layout/Logo";

export default function UniversityDetails({ changeStep }) {
  const countries = ["Nigeria", "USA", "UK", "Canada"];

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
            country: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="university-name"
                className="block mb-2 text-white"
              >
                University name
              </label>
              <Input id="university-name" placeholder="e.g Harvard" />
            </div>

            <div>
              <label
                htmlFor="official-domain"
                className="block mb-2 text-white"
              >
                Official Domain
              </label>
              <Input id="official-domain" placeholder="e.g www.harvard.edu" />
            </div>

            <div className="relative">
              <label htmlFor="country" className="block mb-2 text-white">
                Country
              </label>
              <CustomSelect name="country" options={countries} />
            </div>

            <div>
              <label htmlFor="accreditation" className="block mb-2 text-white">
                Accreditation Body (Optional)
              </label>
              <Input
                id="accreditation"
                placeholder="e.g U.S. Department of Education"
              />
            </div>

            <Button
              className="mt-8"
              title="Next step"
              handleClick={changeStep}
            />
          </Form>
        </Formik>
      </div>

      <div className="w-full">
        <AuthSideBar
          title="University Details"
          currentStep={1}
          totalSteps={4}
          showIndicators={true}
        />
      </div>
    </div>
  );
}
