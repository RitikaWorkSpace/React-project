import React from 'react';
import { Link } from 'react-router-dom';
import Vp from '../View Product/Vp.jsx';
import Rating from '../Card/Rating.jsx';

const FlashSalesProductCardUI
  = ({item}) => {
    const {id,title,rating,image,price} = item;
     
    return (
      // <div className="flex gap-[30px] mt-[20px]">
      //   <div className="max-w-[270px] w-[100%]">
      //     <div className="cardImg bg-[#F5F5F5] relative pb-[10px] ">
      //       <div className="absolute top-2 left-2 bg-[#DB4444] text-white p-1 rounded-md">
      //         -40%
      //       </div>

      //       <div>
      //         <button className="p-2 absolute top-2 right-2 bg-white rounded-full">
      //           <svg
      //             className="h-6 w-6 text-gray-600"
      //             xmlns="http://www.w3.org/2000/svg"
      //             viewBox="0 0 512 512"
      //           >
      //             <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
      //           </svg>
      //         </button>
      //         <Link to='/Vp'>
      //         <button className="p-2 bg-white rounded-full absolute top-14 right-2">
      //           <svg
      //             className="h-6 w-6 text-gray-600"
      //             xmlns="http://www.w3.org/2000/svg"
      //             viewBox="0 0 576 512"
                 
      //           >
      //             <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
      //           </svg>
      //         </button>
      //         </Link>
             
      //       </div>

      //       {/* Product image */}
      //       <img
      //         src="./productImg.svg"
      //         alt="product card image"
      //         className=" px-[40px] py-[35px] "
      //       />
      //       {/* <div className='text-center text-white bg-black p-[5px]'>Add to Cart</div> */}
      //     </div>

      //     <div className="cardBody">
      //       <div className="title font-poppins font-[500] text-[16px] leading-[24px]">
      //         HAVIT HV-G92 Gamepad
      //       </div>
      //       <div className="price text-[#DB4444]">

      //         $120 <span className="text-[#aaaba7] ml-[10px]">$160</span>{" "}
      //       </div>

      //       <div className="flex">
      //         <div className="star-container flex">
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             className="fill-yellow-500 w-4"
      //             viewBox="0 0 576 512"
      //           >
      //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      //           </svg>
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             className="fill-yellow-500 w-4"
      //             viewBox="0 0 576 512"
      //           >
      //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      //           </svg>
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             className="fill-yellow-500 w-4"
      //             viewBox="0 0 576 512"
      //           >
      //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      //           </svg>
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             className="fill-yellow-500 w-4"
      //             viewBox="0 0 576 512"
      //           >
      //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      //           </svg>
      //           <svg
      //             xmlns="http://www.w3.org/2000/svg"
      //             className="fill-yellow-500 w-4"
      //             viewBox="0 0 576 512"
      //           >
      //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      //           </svg>
      //         </div>

      //         <span className="text-[#b3b0b0] ml-[5px]">(88)</span>
      //       </div>
      //     </div>
      //   </div>
      // </div>








      // new ui

      // <div className="flex  gap-[30px] mt-[20px] " key={id} >
      //   <div className="max-w-[270px] w-[100%]">
      //     <div className="cardImg bg-[#F5F5F5] relative pb-[10px] ">
      //       <div className="absolute top-2 left-2 bg-[#DB4444] text-white p-1 rounded-md">
      //         -40%
      //       </div>

      //       <div>
      //         <button className="p-2 absolute top-2 right-2 bg-white rounded-full">
      //           <svg
      //             className="h-6 w-6 text-gray-600"
      //             xmlns="http://www.w3.org/2000/svg"
      //             viewBox="0 0 512 512"
      //           >
      //             <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
      //           </svg>
      //         </button>
      //         <Link to='/Vp'>
      //         <button className="p-2 bg-white rounded-full absolute top-14 right-2">
      //           <svg
      //             className="h-6 w-6 text-gray-600"
      //             xmlns="http://www.w3.org/2000/svg"
      //             viewBox="0 0 576 512"
                 
      //           >
      //             <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
      //           </svg>
      //         </button>
      //         </Link>
             
      //       </div>

      //       {/* Product image */}
      //       <div className='flex justify-center items-center w-[270px] h-[250px]'>
      //       <img
      //         src={image}
      //         alt="product card image"
      //         className=" px-[40px] py-[35px]
      //         w-[190px] "
      //       />
      //       </div>
           
      //       <div className='text-center text-white bg-black p-[5px]'>Add to Cart</div>
      //     </div>

      //     <div className="cardBody">
      //       <div className="title font-poppins font-[500] text-[16px] leading-[24px]">
      //        {title}
      //       </div>
      //       <div className="price text-[#DB4444]">

      //         ${price} <span className="text-[#aaaba7] ml-[10px]">$160</span>
      //       </div>

      //       <Rating rate={rating.rate} count={rating.count} />
      //     </div>
      //   </div>
      // </div>

      <div className="max-w-[270px] w-full max-h-[350px] h-hull " key={id}>
      {/* Card Container */}
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        {/* Card Image */}
        <div className="relative w-[270px] h-[250px] bg-[#F5F5F5]">
          <div className="absolute top-2 left-2 bg-[#DB4444] text-white p-1 rounded-md">
            -40%
          </div>
          <div className="absolute top-2 right-2">
            <button className="p-2 bg-white rounded-full">
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/* Heart Icon */}
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </button>
            <Link to="/Vp">
              <button className="p-2 bg-white rounded-full absolute top-14 right-2">
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {/* View Icon */}
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              </button>
            </Link>
          </div>
          <div className=' flex justify-center items-center w-[190px] h-[180px]   '>
            <img
              src={image}
              alt="Product"
              className=" w-full h-full  "
            />
          </div>
          <div className='text-center text-white bg-black p-[5px]'>Add to Cart</div>
        </div>

        {/* Card Body */}
        <div className="p-4 h-[100px] bg-white">
          <div className="title font-poppins font-[500] text-[16px] leading-[24px]">
            {title}
          </div>
          <div className="price text-[#DB4444] mt-2">
            ${price} <span className="text-[#aaaba7] ml-[10px]">$160</span>
          </div>
          <Rating rate={rating.rate} count={rating.count} />
        </div>
      </div>
    </div>

      



      
    );
  }

export default FlashSalesProductCardUI;
