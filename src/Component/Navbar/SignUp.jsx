import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='xs:grid grid-cols-1 lg:grid-cols-2 mt-[40px] mb-[120px]'>
            <div>
                <img src='./SignUpImg.svg' alt='Sign up image.' />
            </div>
            <div className='xs:mx-[20px] xs:mt-[30px] md:mx-auto md:max-w-[80%] md:my-[30px]'>
                <form>
                    <h1 className='font-inter font-[500] text-[36px] leading-[30px] mb-[24px]'>Create an account</h1>
                    <p className='font-poppins font-[400] text-[16px] leading-[24px] mb-[30px]'>Enter your details below</p>

                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        className='border-b-[1px] border-grey outline-none p-[8px] mb-[30px] max-w-[348px] w-[100%] text-left'
                    />
                    <br />

                    <input
                        type='text'
                        placeholder='Email or Phone Number'
                        name='emailOrPhone'
                        className='border-b-[1px] border-grey outline-none mb-[30px] p-[8px] max-w-[348px] w-[100%]'
                    />
                    <br />

                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        className='border-b-[1px] border-grey outline-none p-[8px] mb-[30px] max-w-[348px] w-[100%]'
                    />
                    <br />

                    <button type='submit' className='xs:py-[10px] xs:px-[45px] md:py-[16px] md:px-[122px] bg-[#DB4444] text-[#FAFAFA] rounded-[5px] mb-[16px]'>
                        Create Account
                    </button>
                    <br />

                    <button className='xs:p-[10px] sm:py-[16px] sm:px-[86px] flex items-center border-[2px] border-[green] mb-[25px]'>
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
