import React from 'react';
import Counter from './Counter';
import products from "../../data.jsx";
import Card2 from '../Card/Card2.jsx';

const Vp = () => {
    const limitedProducts = products.slice(0, 4);
    return (

        <div className='max-w-[1170px] w-[100%] mx-auto'>
            <div className=' h-[600px] mt-[181px]'>
                {/* view product */}
                <div className='grid grid-cols-1  lg:grid-cols-[60%_auto] gap-[70px]  '>
                    <div className='flex  flex-col lg:flex-row  gap-[30px] items-center '>
                        <div className='flex flex-col  md:flex-row lg:flex-col  gap-[16px]  '>
                            <div className='w-[170px] h-[138px]'>
                                <img className="bg-[#F5F5F5] px-[12px] py-[24px] w-[121px] h-[114px]" src="./vpside01.svg" alt="" />
                            </div>

                            <div className='w-[170px] h-[138px]'>
                                <img className="bg-[#F5F5F5] px-[12px] py-[24px] w-[121px] h-[114px]" src="./vpside01.svg" alt="" />
                            </div>
                            <div className='w-[170px] h-[138px]'>
                                <img className="bg-[#F5F5F5] px-[12px] py-[24px] w-[121px] h-[114px]" src="./vpside01.svg" alt="" />
                            </div>
                            <div className='w-[170px] h-[138px]'>
                                <img className="bg-[#F5F5F5] px-[12px] py-[24px] w-[121px] h-[114px]" src="./vpside01.svg" alt="" />
                            </div>
                        </div>
                        <div className='bg-[#F5F5F5] px-[27px] pt-[154px] pb-[131px]   lg:w-[500px] lg:h-[600px]   '>
                            <img className=" bg-cover w-[446px] h-[315px]" src='./vpmainImage.svg'></img>
                        </div>
                    </div>
                    <div className=' '>
                        <div >
                            <h1 className='font-inter font-[600px] text-[24px] leading-[24px] mb-[16px]'>Havic HV G-92 Gamepad</h1>
                            <div className='mb-[16px]'>starr <span className='text-[14px] font-[400] leading-[21px] opacity-[50%]'>(150 Review) |</span>  <span className='text-[#00FF66] text-[14px] font-[400] leading-[21px] font-poppins'>In Stock</span></div>
                            <div className='text-[24px] font-[intel] font-[400] leading-[24px]'>$192.00</div>
                            <p className='text-[14px] font-[400] leading-[21px] py-[24px] border-b-[1px] border-black '>PlayStation 5 Controller Skin High quality vinyl with air <br />channel adhesive for easy bubble free install & mess <br></br> free removal Pressure sensitive.</p>

                        </div>
                        <div className='my-[24px]'>
                            {/* Color Selection */}
                            <div className="flex gap-[14px] mb-[24px]">
                                <label htmlFor="option1" className="mr-[10px] font-intel font-[400] text-[20px] leading-[20px]">Color :</label>

                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value="blue"
                                    className="w-5 h-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-blue-500 checked:border-black"
                                />

                                <input
                                    type="radio"
                                    id="option2"
                                    name="options"
                                    value="red"
                                    className="w-5 h-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-red-500 checked:border-black"
                                />
                            </div>
                            {/* Color Selection */}



                            {/* size */}
                            <div className='flex gap-[16px] font-intel font-[400] text-[20px] leading-[20px] mb-[24px]'>
                                Sizes:
                                <div className='flex gap-[16px] justify-center items-center'>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white'>xs</div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white'>s</div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white'>ml</div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white'>l</div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center p-[5px] border border-black text-black hover:bg-[#DB4444] hover:text-white'>xl</div>
                                </div>


                            </div>
                            {/* size */}

                            {/* counter,button and like */}
                            <div className='flex gap-[16px]'>
                                <Counter />
                                <button className='bg-[#DB4444] text-white hover:text-white py-[10px] px-[48px] rounded-[5px]'>Buy Now</button>
                                <button className=" p-[5px] bg-white   border-2 rounded-[5px]">
                                    <svg
                                        className="h-6 w-6 text-gray-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                </button>
                            </div>
                            {/* counter,button and like */}


                        </div>
                        {/*  */}
                        <div className='border-2 border-black rounded-[5px]  max-w-[450px] w-[100%]'>

                            {/* child1 */}

                            <div className='flex gap-[16px] border-b-[1px] border-black items-center pt-[24px] pb-[16px] '>
                                <div className='ml-[10px]'>
                                    <img src="./vpicon01.svg" alt="" />
                                </div>
                                <div >
                                    <h1 className='mb-[8px]'>Free Delivery</h1>
                                    <p className='hover:underline'>Enter your postal code for Delivery Availability</p>
                                </div>


                            </div>



                            {/* child 2 */}
                            <div className=' flex gap-[16px] items-center pt-[16px] pb-[24px]  '>
                                <div className='ml-[10px]'>
                                    <img src="./vpicon02.svg" alt="" />
                                </div>
                                <div >
                                    <h1 className='mb-[8px]'>Free Delivery</h1>
                                    <p className='hover:underline'>Enter your postal code for Delivery Availability</p>
                                </div>


                            </div>

                        </div>
                        {/*  */}

                    </div>
                </div>
                {/* view product */}
            </div>



            {/* related  */}
            <div className='flex mt-[140px] mb-[60px]'>
                <img src="./redRectangle.svg" className='max-w-[20px] w-[100%] '>
                </img>
                <h3 className='text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]'>Related Item</h3>
            </div>

            {/*  product */}
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-[30px] md:mt-[20px] md:mb-[140px]">
                {limitedProducts.map((item) => (
                    <Card2 item={item} key={item.id} />
                ))}
            </div>
            {/*  product */}
            {/* related  */}




        </div>

    );
}

export default Vp;















