"use client";
import React, { useRef, useState } from "react";
import { Formik } from "formik";
import { Error, Label, Submit } from "@/components/form";
import { csv_file_upload_schema, CSVFileUpload, SingleCertificateUpload} from "@/schema";
import { 
    checkCSVData, 
    checkCSVHeaders, 
    extractCSVData, 
    addUniqueIDToRows, 
    convertToCSV, 
    generate32ByteSecret,
    addUniqueIDToHeader,
} from "@/utils/csv";
import { LuLoaderCircle } from "react-icons/lu";

import { toast } from "react-hot-toast";

interface CertificateData {
    name:               string;
    graduation_year:    string;
    grade:              string;
    title:              string;
    major:              string;
    uniqueID:           string;
    school:             string;
}

const Page = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [csvBody, setCSVBody] = useState<string[][]>([]);
    const [downloadLink, setDownloadLink] = useState<string | null>(null);

    const school = "Xanix Univeristy";

    const handleButtonClick = () => {
        if(fileInputRef) {
            fileInputRef.current?.click();
        }
    }

    const [processing, setProcessing] = useState<boolean>(false);
    const processCSVDATA = async (values: CSVFileUpload) => {
        if (values.csv) {
            try {
                setProcessing(true);
                await checkCSVHeaders(values.csv);
                const { headers, body } = await extractCSVData(values.csv);
                await checkCSVData(body);
                
                const updatedBody = addUniqueIDToRows(body);
                const updatedHeaders = addUniqueIDToHeader(headers);
                setCSVBody(updatedBody);

                const updatedCSV = convertToCSV(updatedBody, updatedHeaders);
                const blob = new Blob([updatedCSV], { type: 'text/csv' });
                const link = URL.createObjectURL(blob);

                setDownloadLink(link);
            } catch (error: unknown) {
                console.error(error);
                if (error instanceof Error) {
                    toast.error(error?.message);
                } else if (typeof error === 'string') {
                    toast.error(error);
                } else {
                    toast.error("Failed to process CSV file");
                }
            } finally {
                setProcessing(false);
            }
        }
    }


    const [submitting, setSubmitting] = useState<boolean>(false);
    const handleSubmit = async () => {
        try {
            setSubmitting(true);
            let certificates  = csvBody.map(row => ({
                name: row[0],
                graduation_year: row[1],
                grade: row[2],
                title: row[5],
                major: row[4],
                uniqueID: row[6],
                school: row[7],
            }));
            let cert_data = [];

            for (let  i = 0; i < certificates.length; i++) {
                const { hash, encryptedData } = await generate32ByteSecret(certificates[i])

                const cert_metadata = {
                    certificate_id: certificates[i].uniqueID,
                    hashedkey: hash,
                    encrypted_cert_metadata: btoa(encryptedData)
                };

                cert_data.push(cert_metadata);
            }

            console.log("cert data: ", cert_data);
        } catch (error) {
            toast.error("An unexpected error occurred during encryption");
        } finally {
            setSubmitting(false);
        }
    }


    return (
        <div className="bulk-upload">
            <div className="p-[24px] md:p-[64px]">
                <div className="form">
                    <Formik
                        initialValues={{ csv: null }}
                        onSubmit={processCSVDATA} 
                        validationSchema={csv_file_upload_schema}
                    >
                        {({ values, errors, touched, setFieldValue })=> (
                            <>
                                <div className="mb-5">
                                    <Label 
                                        name="csv"
                                        label="CSV File (View CSV Format)"
                                    />

                                    <div className="input border border-stroke rounded-[12px] flex items-center gap-2 justify-between py-[12px] px-[16px]">
                                        <p> { values?.csv?.name || "Upload a file"} </p>
                                        <input
                                            type="file" 
                                            ref={fileInputRef}
                                            className="w-0 h-0"
                                            accept=".csv"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const file = e.currentTarget.files?.[0];
                                                setDownloadLink(null);
                                                if (file) {
                                                  setFieldValue("csv", file);
                                                }
                                            }}
                                            disabled={processing || submitting}
                                        />
                                        <button
                                            className="bg-primary py-[8px] px-[12px] rounded-[4px] min-w-[fit-content] text-sm cursor-pointer text-black"
                                            onClick={handleButtonClick}
                                        >
                                            <span> Import CSV </span>
                                        </button>
                                    </div>

                                    <Error error={errors["csv"]} visible={touched["csv"]} />
                                    
                                </div>

                                { values.csv && downloadLink && (
                                    <a 
                                        href={downloadLink}
                                        download="updated_file.csv"
                                        className="input border border-stroke rounded-[12px] py-[16px] px-[16px] text-center block mb-5"
                                    >
                                        <span> Download Post-Filed CSV </span>
                                    </a>
                                )}

                                { !downloadLink && (
                                    <Submit 
                                        title="Process CSV Data " 
                                        loading={processing}
                                    />
                                )}

                                { downloadLink && (
                                    <button 
                                        className="bg-primary text-black w-full px-[16px] py-[16px] rounded-[12px] font-[500] flex items-center justify-center gap-2"
                                        onClick={handleSubmit}
                                    >
                                        {submitting ? (
                                            <LuLoaderCircle className="animate-spin delay-150ms text-xl" />
                                        ) : (
                                            <>
                                            <span> Confirm And Publish </span>
                                            </>
                                        )}
                                    </button>
                                )}
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Page;