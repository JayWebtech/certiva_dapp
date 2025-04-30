"use client";
import React, { useState } from "react";
import { CustomSelect, Field, Submit } from "@/components/form";
import { Formik } from "formik";
import { single_certificate_upload, SingleCertificateUpload } from "@/schema";
import { generate32ByteSecret } from "@/utils/csv";
import  { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const school = "Xanix university";

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (values: SingleCertificateUpload) => {
        try {
            setLoading(true);
            const { name, graduation_year, grade, title, major, uniqueID } = values;
            const { hash, encryptedData } = await generate32ByteSecret({ name, graduation_year,grade, title, major, uniqueID, school })

            const cert_metadata = {
                certificate_id: uniqueID,
                hashedkey: hash,
                encrypted_cert_metadata: btoa(encryptedData)
            };

            console.log("cert meta data", cert_metadata);
        } catch (error) {
            toast.error("An unexpeceted error occurred")
        } finally {
            setLoading(false);
        }
    }

    const generateUniqueId = (setFieldValue: (field: string, value: any) => void) => {
        const uniqueID = uuidv4();
        setFieldValue("uniqueID", uniqueID);
    }

    return (
        <div className="single-upload">
            <div className="p-[24px] md:p-[64px]">
                <div className="form">
                    <Formik
                        initialValues={{ 
                            name: "", 
                            graduation_year: "",
                            grade: "",
                            email: "",
                            title: "",
                            major: "",
                            uniqueID: "",
                        }}
                        onSubmit={(values) => handleSubmit(values)}
                        validationSchema={single_certificate_upload}
                    >
                        {({ setFieldValue })=> (
                            <>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="e.g John Doe"
                                            label="Graduation Name"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <CustomSelect
                                            name="graduation_year"
                                            placeholder="eg. 2024"
                                            label="Graduation Year"
                                            options={["2028","2027", "2026", "2025", "2024", "2023", "2022", "2021", "2020" ]}
                                        />
                                    </div>
                                </div>

                                <Field 
                                    name="email"
                                    type="email"
                                    placeholder="Degree Holder Email"
                                    label="Degree Holder Email"
                                    disabled={loading}
                                />

                                <Field 
                                    name="grade"
                                    type="text"
                                    placeholder="eg. First class"
                                    label="Grade"
                                    disabled={loading}
                                />

                                <Field 
                                    name="title"
                                    type="text"
                                    placeholder="eg. Bachelor of Science"
                                    label="Degree Title"
                                    disabled={loading}
                                />

                                <Field 
                                    name="major"
                                    type="text"
                                    placeholder="eg Computer Science"
                                    label="Degree Major"
                                    disabled={loading}
                                />

                                <Field 
                                    name="uniqueID"
                                    type="text"
                                    label="Unique ID"
                                    disabled={loading}
                                    buttonText="Generate"
                                    handleButtonClick={()=> generateUniqueId(setFieldValue)}
                                />


                                <Submit 
                                    title="Confirm And Publish" 
                                    loading={loading}
                                />
                            </>
                        )}  
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Page;