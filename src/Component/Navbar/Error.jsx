import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col max-w-[829px] w-[100%] mx-auto my-[140px] xs:p-[20px]'>
            <h1 className='xs:text-[39px] sm:text-[53px] md:text-[80px] lg:text-[110px] font-inter font-[500]  leading-[115px] mb-[40px]'>404 Not Found</h1>
            <p className='font-poppins font-[400] text-[16px] leading-[24px] mb-[80px]'>Your visited page not found. You may go home page.</p>
            <Link to='/'>
            <button className='text-white bg-[#DB4444] py-[16px] px-[48px] '>Back to home page</button>
            </Link>
         
        </div>
    );
}

export default Error;
