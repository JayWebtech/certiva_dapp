import * as yup from "yup";

export const test_schema = yup.object().shape({
  university_name: yup.string().required("Please provide university name"),
  official_domain: yup
    .string()
    .url()
    .required("Please provide official school website"),
  country: yup.string().required("Please select a country"),
  url: yup.string().required("Please add download url"),
});

export const adminstrationInformationSchema = yup.object({
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
