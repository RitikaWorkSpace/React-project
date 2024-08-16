import React from 'react';
import NABottom from './NABottom';

const NA = () => {
    return (

        <div className="max-w-[1170px] w-[100%] mx-auto ">
              {/* red heading */}
            <div className="flex mb-6">
                <img src="redRectangle.svg" className="max-w-[20px] w-[100%] "></img>
                <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
                    Featured
                </h3>
            </div>
            {/* red heading */}
            {/* main heading */}
            <div className="flex justify-between ">

                <h1 className="font-intel font-[600] text-[36px]">New Arrival</h1>
              





            </div>
            {/* main heading */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[120px] mt-[60px]'>
<div className='bg-black relative flex justify-center items-end'>
    <img src="./na01.svg" alt=""  />
    <div className='absolute bottom-5  left-5'>
    <h1 className='text-[#FAFAFA] text-[600] text-[24px] font-intel mb-[16px]'>PlayStation 5</h1>
    <p className='text-[#FAFAFA] text-[400] text-[14px] font-poppins mb-[16px]'>Black and White version of the PS5 coming out on sale.</p>
    <span className='font-[600] text-[#FAFAFA] font-poppins text-sm leading-[24px] underline underline-offset-1'>ShopNow</span>
    </div>
   
</div>
<div className='grid grid-rows-2 gap-[30px]'>
    <div className='relative  h-62'>
        <img src="./na02.svg" className='w-full h-full  object-cover'></img>
        <div className='absolute bottom-3  left-5'>
    <h1 className='text-[#FAFAFA] text-[600] text-[24px] font-intel mb-[16px]'>Women’s Collections</h1>
    <p className='text-[#FAFAFA] text-[400] text-[14px] font-poppins mb-[16px]'>Featured woman collections that give you another vibe.</p>
    <span className='font-[600] text-[#FAFAFA] font-poppins text-sm leading-[24px] underline underline-offset-1'>ShopNow</span>
    </div>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
  <div className='relative bg-black flex justify-center items-center'>
    <img src="./na2.1.svg"  />
    <div className='absolute bottom-3 left-3'>
      <h1 className='text-[#FAFAFA] font-[600] text-[24px] font-intel mb-[16px]'>Speakers</h1>
      <p className='text-[#FAFAFA] font-[400] text-[14px] font-poppins mb-[16px]'>Amazon wireless speakers</p>
      <span className='font-[600] text-[#FAFAFA] font-poppins text-sm leading-[24px] underline underline-offset-1'>ShopNow</span>
    </div>
  </div>
  <div className='relative bg-black flex justify-center items-center '>
    <img src="./na2.2.svg"  />
    <div className='absolute bottom-3 left-3'>
      <h1 className='text-[#FAFAFA] font-[600] text-[24px] font-intel mb-[16px]'>Perfume</h1>
      <p className='text-[#FAFAFA] font-[400] text-[14px] font-poppins mb-[16px]'>GUCCI INTENSE OUD EDP</p>
      <span className='font-[600] text-[#FAFAFA] font-poppins text-sm leading-[24px] underline underline-offset-1'>ShopNow</span>
    </div>
  </div>
</div>

   
</div>
        </div>

         <NABottom/>   

        </div>
    );
}

export default NA;
