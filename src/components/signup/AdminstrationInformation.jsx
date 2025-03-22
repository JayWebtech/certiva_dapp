import { ChevronDown } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../form';
import Input from '../form/Input';
import AuthSideBar from '../layout/AuthSideBar';

const adminstrationInformationSchema = Yup.object({
  fullname: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  universityEmail: Yup.string()
    .email('Invalid email address')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Please enter a valid university email'
    )
    .required('University email is required'),
  jobTitle: Yup.string()
    .min(2, 'Job title must be at least 2 characters')
    .required('Job title is required'),
  phoneNumber: Yup.string()
    .matches(/^[+\d][\d\s-]+$/, 'Invalid phone number format')
    .required('Phone number is required'),
});

export default function AdminstrationInformation() {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      universityEmail: '',
      jobTitle: '',
      phoneNumber: '',
    },
    validationSchema: adminstrationInformationSchema,
    onSubmit: (values) => {
      //   console.log(values);
      // Handle form submission here
    },
  });

  return (
    <div className='flex w-full flex-col lg:flex-row rounded-3xl overflow-hidden'>
      <div className='w-full lg:w-1/2 p-8 lg:p-12'>
        <div className='mb-8'>
          <h2 className='text-4xl font-bold mb-2'>
            <span className='text-white'>uni</span>
            <span className='text-[#A3FF50]'>chain</span>
          </h2>
          <p className='text-zinc-400'>
            Register your university to start issuing verifiable, fraud-proof
            academic credentials.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='fullname' className='block mb-2 text-white'>
              Fullname
            </label>
            <Input
              id='fullname'
              name='fullname'
              placeholder='e.g John Doe'
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
              error={formik.errors.fullname}
              touched={formik.touched.fullname}
            />
          </div>

          <div>
            <label htmlFor='universityEmail' className='block mb-2 text-white'>
              University email
            </label>
            <Input
              id='universityEmail'
              name='universityEmail'
              placeholder='e.g admin@harvard.edu'
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.universityEmail}
              error={formik.errors.universityEmail}
              touched={formik.touched.universityEmail}
            />
          </div>

          <div>
            <label htmlFor='jobTitle' className='block mb-2 text-white'>
              Job Title/Designation
            </label>
            <Input
              id='jobTitle'
              name='jobTitle'
              placeholder='e.g., Registrar, Academic Dean, IT Admin'
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
              error={formik.errors.jobTitle}
              touched={formik.touched.jobTitle}
            />
          </div>

          <div>
            <label htmlFor='phoneNumber' className='block mb-2 text-white'>
              Phone Number
            </label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              placeholder='+234 900 9000'
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
            />
          </div>

          <Button
            type='submit'
            className='mt-8'
            title='Next step'
            disabled={formik.isSubmitting}
          />
        </form>
      </div>

      <div className='w-full lg:w-1/2 bg-black'>
        <AuthSideBar
          title='Administrator Details'
          currentStep={2}
          totalSteps={3}
          showIndicators={true}
        />
      </div>
    </div>
  );
}
