// import React from 'react';

// const Contact = () => {
//     return (
//         <div className='grid grid-cols-[40%_auto] max-w-[1170px] w-[100%] mx-auto mt-[181px] mb-[140px] gap-[30px]'>

// <div className='flex flex-col shadow-[0_1px_13px_0px_#0000000D] px-[35px] py-[40px]' >
//     <div className='' >
//         <div className="flex gap-[30px] mt-[24px]">
//         <img
//       src="./Contactphone.svg"
//       className="bg-[#DB4444] rounded-full p-[5px]"

//       alt="Icon Delivery"
//     /> <span className='text-[16px] font-[500] font-poppins leading-[24px]'>Call To Us</span>
//         </div>

//     <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>We are available 24/7, 7 days a week.</p>
//     <p className=' mt-[16px] mb-[32px] text-[14px] font-[400] leading-[21px] font-poppins'>Phone: +8801611112222</p>
//     </div>
//     <div>
//         <div className="flex gap-[30px] mt-[24px]">
//         <img
//       src="./ContactMail.svg"
//       className="bg-[#DB4444] rounded-full p-[5px]"

//       alt="Icon Delivery"
//     /> <span className='text-[16px] font-[500] font-poppins leading-[24px]'>Write To US</span>  
//         </div>

//     <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>Fill out our form and we will contact you within 24 hours.</p>
//     <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>Emails: customer@exclusive.com</p>
//     <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>Emails: support@exclusive.com</p>
//     </div>
// </div>
// <div className='shadow-[0_1px_13px_0px_#0000000D] px-[31px] py-[40px]'>   

//   <form action="" className="flex flex-col">
//     <div className="flex flex-wrap gap-4 mb-4">
//       <input type="text" placeholder="Your Name *" className="bg-[#F5F5F5] py-[10px] px-[5px] text-center flex-grow" />
//       <input type="email" placeholder="Your Email *" className="bg-[#F5F5F5] py-[10px] px-[5px] text-center flex-grow" />
//       <input type="tel" placeholder="Your Phone *" className="bg-[#F5F5F5] py-[10px] px-[5px] text-center flex-grow" />
//     </div>
//     <textarea placeholder="Your Message *" className="bg-[#F5F5F5] px-[10px] py-[10px] mb-[32px]" rows="8" cols="80"></textarea>
//     <div className="flex justify-end">
//       <button className="bg-[#DB4444] px-[48px] py-[16px] text-white">Submit Button</button>
//     </div>
//   </form>
// </div>


//         </div>
//     );
// }

// export default Contact;




import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Contact = () => {
    return (

        <div>
           <div className='max-w-[1170px] w-[100%] mx-auto relative top-[80px] text-center md:text-left'>
    <Breadcrumbs />
</div>

            <div className='grid grid-cols-1 lg:grid-cols-[30%_auto]  xl:grid-cols-[40%_auto] max-w-[1170px] w-[100%] mx-auto mt-[181px] mb-[140px] gap-[30px]'>
            <div className='flex flex-col shadow-[0_1px_13px_0px_#0000000D] px-[35px] py-[40px] xs:mx-[10px] xl:mx-0' >
                    <div className='' >
                        <div className="flex gap-[30px] mt-[24px]">
                            <img
                                src="./Contactphone.svg"
                                className="bg-[#DB4444] rounded-full p-[5px]"
                                alt="Icon Delivery"
                            />
                            <span className='text-[16px] font-[500] font-poppins leading-[24px]'>Call To Us</span>
                        </div>
                        <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>We are available 24/7, 7 days a week.</p>
                        <p className='mt-[16px] mb-[32px] text-[14px] font-[400] leading-[21px] font-poppins'>Phone: +8801611112222</p>
                    </div>
                    <div className='border-t-[1px] border-black'>
                        <div className="flex gap-[30px] mt-[24px]">
                            <img
                                src="./ContactMail.svg"
                                className="bg-[#DB4444] rounded-full p-[5px]"
                                alt="Icon Delivery"
                            />
                            <span className='text-[16px] font-[500] font-poppins leading-[24px]'>Write To Us</span>
                        </div>
                        <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>Emails: customer@exclusive.com</p>
                        <p className='mt-[16px] text-[14px] font-[400] leading-[21px] font-poppins'>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className='shadow-[0_1px_13px_0px_#0000000D] px-[31px] py-[40px] xs:mx-[10px] md:mx-0'>
                    <form action="" className="flex flex-col">
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="relative flex-grow">
                                <input type="text" placeholder="Your Name " className="bg-[#F5F5F5] py-[10px] px-[5px] text-center w-full" />
                                <span className="absolute right-12 top-2  text-[#DB4444]">*</span>
                            </div>
                            <div className="relative flex-grow">
                                <input type="email" placeholder="Your Email " className="bg-[#F5F5F5] py-[10px] px-[5px] text-center w-full" />
                                <span className="absolute right-12 top-2  text-[#DB4444]">*</span>
                            </div>
                            <div className="relative flex-grow">
                                <input type="tel" placeholder="Your Phone " className="bg-[#F5F5F5] py-[10px] px-[5px] text-center w-full" />
                                <span className="absolute right-12 top-2 text-[#DB4444]">*</span>
                            </div>
                        </div>
                        <textarea placeholder="Your Message " className="bg-[#F5F5F5] px-[10px] py-[10px] mb-[32px]" rows="8" cols="80"></textarea>
                        <div className="flex justify-end">
                            <button className="bg-[#DB4444] px-[48px] py-[16px] text-white">Submit Button</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Contact;

