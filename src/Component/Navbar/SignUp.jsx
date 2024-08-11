import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    // Define the validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(5, 'Name must be at least 5 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .required('Required'),
        emailOrPhone: Yup.string()
            .test('emailOrPhone', 'Must be a valid email or phone number', (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
                const phoneRegex = /^[0-9]{10}$/;
                return emailRegex.test(value) || phoneRegex.test(value);
            })
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
            .required('Required'),
    });

    // Initialize Formik with initial values, validation schema, and submit handler
    const formik = useFormik({
        initialValues: {
            name: '',
            emailOrPhone: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className='xs:grid grid-cols-1 lg:grid-cols-2 mt-[40px] mb-[120px]'>
            <div>
                <img src='./SignUpImg.svg' alt='Sign up image.' />
            </div>
            <div className='xs:mx-[20px] xs:mt-[30px]  md:mx-auto md:max-w-[80%] md:my-[30px] '>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='font-inter font-[500] text-[36px] leading-[30px] mb-[24px]'>Create an account</h1>
                    <p className='font-poppins font-[400] text-[16px] leading-[24px] mb-[30px]'>Enter your details below</p>

                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        className='border-b-[1px] border-grey outline-none  p-[8px] mb-[30px] max-w-[348px] w-[100%] text-left '
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='text-red-500'>{formik.errors.name}</div>
                    ) : null}
                    <br />

                    <input
                        type='text'
                        placeholder='Email or Phone Number'
                        name='emailOrPhone'
                        className='border-b-[1px] border-grey outline-none mb-[30px]  p-[8px] max-w-[348px] w-[100%]'
                        value={formik.values.emailOrPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
                        <div className='text-red-500'>{formik.errors.emailOrPhone}</div>
                    ) : null}
                    <br />

                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        className='border-b-[1px] border-grey outline-none  p-[8px] mb-[30px] max-w-[348px] w-[100%]'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='text-red-500'>{formik.errors.password}</div>
                    ) : null}
                    <br />

                    <button type='submit'
                     className='xs:py-[10px] xs:px-[45px]  md:py-[16px] md:px-[122px] bg-[#DB4444] text-[#FAFAFA] rounded-[5px] mb-[16px] '>
                        Create Account
                    </button>
                    <br />

                    <button className=' xs:p-[10px]  sm:py-[16px] sm:px-[86px] flex items-center  border-[2px] border-[green] mb-[25px]'>
                        <img src='./Icon-Google.svg' alt='Google Icon' className='mr-2' />
                        Sign up with Google
                    </button>

                    <div className='opacity-[70%]'>
                        Already have an account? &nbsp;
                        <Link to='/logIn' className='hover:border-b-[1px] hover:border-b-black hover:text-black hover:font-[700]'>
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;






