import * as yup from "yup";

// Define the shape of the test schema
export interface TestSchema {
  university_name: string;
  official_domain: string;
  country: string;
  url: string;
}

// Define the shape of the administration information schema
export interface AdministrationInformation {
  fullname: string;
  universityEmail: string;
  jobTitle: string;
  phoneNumber: string;
}

export  interface SingleCertificateUpload {
  name:           string;
  graduation_year:string;
  grade:          string;
  email:          string;
  title:          string;
  major:          string;
  uniqueID:       string;
}

export interface CSVFileUpload {
  csv: File | null;
}


export const test_schema: yup.ObjectSchema<TestSchema> = yup.object().shape({
  university_name: yup.string().required("Please provide university name"),
  official_domain: yup
    .string()
    .url()
    .required("Please provide official school website"),
  country: yup.string().required("Please select a country"),
  url: yup.string().required("Please add download url"),
});

export const adminstrationInformationSchema: yup.ObjectSchema<AdministrationInformation> = yup.object({
  fullname: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  universityEmail: yup
    .string()
    .email("Invalid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid university email",
    )
    .required("University email is required"),
  jobTitle: yup
    .string()
    .min(2, "Job title must be at least 2 characters")
    .required("Job title is required"),
  phoneNumber: yup
    .string()
    .matches(/^[+\d][\d\s-]+$/, "Invalid phone number format")
    .required("Phone number is required"),
}); 



export const single_certificate_upload = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Graduate Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid university email",
    )
    .required("Degree Holder Email is required"),
  grade: yup
    .string()
    .min(2, "Grade must be at least 2 characters")
    .required("Grade is required"),
  graduation_year: yup
    .string()
    .min(4, "Graduation Year must be 4 digits")
    .max(4, "Graduation Year must be 4 digits")
    .required("Graduation Year is required"),
  title: yup
    .string()
    .min(2, "Degree Title must be at least 2 characters")
    .required("Degree Title is required"),
  major: yup
    .string()
    .min(2, "Degree Major must be at least 2 characters")
    .required("Degree Major is required"),
  uniqueID: yup
    .string()
    .min(2, "Unique ID must be at least 2 characters")
    .required("Unique ID is required")
}); 



export const csv_file_upload_schema = yup.object().shape({
  csv: yup.mixed<File>()
    .required("CSV file is required")
    .test("fileType", "Only CSV files are allowed", (file) => {
      return file instanceof File && file.type === "text/csv";
    })
    .test("fileSize", "File is too large (max 5MB)", (file) => {
      return file instanceof File && file.size <= 5 * 1024 * 1024;
    }),
});

