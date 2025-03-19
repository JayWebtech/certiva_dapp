import * as yup from "yup";


export const test_schema  = yup.object().shape({
    university_name: yup.string().required("Please provide university name"),
    official_domain: yup.string().url().required("Please provide official school website"),
    country: yup.string().required("Please select a country"),
    url: yup.string().required("Please add download url"),
})