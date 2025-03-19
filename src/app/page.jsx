"use client";
import { Formik } from "formik";
import { Field, Select, Submit } from "@/components/form";
import { test_schema } from "@/schema";

import { TbDownload } from "react-icons/tb";


export default function Home() {
  return (
    <div>
      
      {/* Testing Input, Select, Button components */}

      <Formik
        initialValues={{ university_name: "", official_domain: "", country: "", url: "" }}
        onSubmit={(values)=> console.log("values: ", values)}
        validationSchema={test_schema}
      >
        {()=> (
          <>
            <Field 
              name="university_name"
              label="University name"
              placeholder="eg. Harvard"
              type="text"
            />
            <Field 
              name="official_domain"
              label="Official domain"
              placeholder="eg. www.harvard.edu"
              type="text"
            />

            <Select 
              name="country"
              label="Country"
              options={["Nigeria", "Denmark", "Ecuador", "Senegal", "France", "Kali"]}
            />


            <Field 
              name="url"
              label="Download URL"
              placeholder=""
              type="text"
              Icon={TbDownload}
              handleIconClick={()=> null}
            />
            <Field 
              name="id"
              label="Unique ID"
              placeholder="Computer science"
              type="text"
              buttonText={"Generate ID"}
              handleButtonClick={()=> null}
            />

            <Submit title="Next step" />
          </>
        )}
      </Formik>
    </div>
  );
}
