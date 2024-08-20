import React from "react";


const Categories = () => {
  return (
    <div className="max-w-[1170px] w-[100%] mx-auto mt-[80px]">
      <div>
        <div className="flex">
          <img
            src="./redRectangle.svg"
            className="max-w-[20px] w-[100%] "
          ></img>
          <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
            Categories
          </h3>
        </div>
        <div className="flex flex-col md:flex-row  lg:flex-row justify-between">
          <h1 className="font-inter text-black text-[36px] font-[600] leading-[48px] mt-[20px]">
            Browse By Category
          </h1>
          <div className=" gap-[10px] hidden md:flex md:flex-row  items-center justify-center">
            <div className=" bg-gray-300 rounded-[50%] p-2 h-[36px] ">
              <img
                src="./arrowLeft.svg"
                alt="Arrow Left"
                className="max-w-[16px] w-[100%] h-full "
                // onClick={handlePrev}
              />
            </div>
            <div className="flex items-center justify-center bg-gray-300 rounded-[50%] p-2 h-[36px]">
              <img
                src="./arrowRight.svg"
                alt="Arrow Right"
                className="max-w-[16px] w-[100%] h-full"
                // onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
      {/* box */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-[30px] mt-[60px]   ">
        <div className="  border border-black px-[57px] py-[24px] hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
          <img src="./Category-CellPhone.svg" className="mb-[16px]"></img>
          <p>Phones</p>
        </div>
        <div className="  px-[57px] py-[24px] border border-black hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
          <img src="./Category-Computer.svg" className="mb-[16px]"></img>
          <p>Computers</p>
        </div>
        <div className="  px-[57px] py-[24px] border border-black hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
          <img src="./Category-SmartWatch.svg" className="mb-[16px]"></img>
          <p className="text-center">SmartWatch</p>
        </div>
        <div className="  px-[57px] py-[24px] border border-black bg-[#DB4444] text-white flex flex-col items-center justify-center">
          <img src="./Category-Camera.svg" className="mb-[16px]"></img>
          <p>Camera</p>
        </div>
        <div className="  px-[57px] py-[24px] border border-black hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
          <img src="./Category-Headphone.svg" className="mb-[16px]"></img>
          <p className="">HeadPhones</p>
        </div>
        <div className="  px-[57px] py-[24px] border border-black hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
          <img src="./Category-Gamepad.svg" className="mb-[16px]"></img>
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;


// =====================================


// import {React, useRef} from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import "swiper/css/navigation";

// const Categories = () => {

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);



//   return (
//     <div className="max-w-[1170px] w-[100%] mx-auto mt-[80px]">
//         <div>
//          <div className="flex">
//            <img
//              src="./redRectangle.svg"
//              className="max-w-[20px] w-[100%] "
//            ></img>
//            <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
//              Categories
//            </h3>
//          </div>
//          <div className="flex flex-col md:flex-row  lg:flex-row justify-between">
//            <h1 className="font-inter text-black text-[36px] font-[600] leading-[48px] mt-[20px]">
//              Browse By Category
//            </h1>
//            <div className=" gap-[10px] hidden md:flex md:flex-row  items-center justify-center">
//              <div className=" bg-gray-300 rounded-[50%] p-2 h-[36px] ">
//                <img
//                  src="./arrowLeft.svg"
//                  alt="Arrow Left"
//                  className="max-w-[16px] w-[100%] h-full "
//                   onClick={prevRef}
//                />
//              </div>
//              <div className="flex items-center justify-center bg-gray-300 rounded-[50%] p-2 h-[36px]">
//                <img
//                  src="./arrowRight.svg"
//                  alt="Arrow Right"
//                  className="max-w-[16px] w-[100%] h-full"
//                   onClick={nextRef}
//                />
//              </div>
//            </div>
//          </div>
//        </div>
//       {/ Swiper Carousel /}


      
 
//       <Swiper spaceBetween={30} slidesPerView={"auto"} mousewheel={true} navigation={{ prevEl: prevRef.current, nextEl:
//   nextRef.current, }} modules={[Navigation]} className="custom-swiper" onSlideChange={handleSlideChange}>
//   <SwiperSlide>
//     <div
//       className="border border-black px-[57px] py-[24px] hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
//       <img src="./Category-CellPhone.svg" className="mb-[16px]" alt="Phones" />
//       <p>Phones</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="border border-black px-[57px] py-[24px] hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
//       <img src="./Category-Computer.svg" className="mb-[16px]" alt="Computers" />
//       <p>Computers</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="border border-black px-[57px] py-[24px] hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
//       <img src="./Category-SmartWatch.svg" className="mb-[16px]" alt="SmartWatch" />
//       <p className="text-center">SmartWatch</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="border border-black bg-[#DB4444] text-white px-[57px] py-[24px] flex flex-col items-center justify-center">
//       <img src="./Category-Camera.svg" className="mb-[16px]" alt="Camera" />
//       <p>Camera</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="border border-black px-[57px] py-[24px] hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
//       <img src="./Category-Headphone.svg" className="mb-[16px]" alt="HeadPhones" />
//       <p className="">HeadPhones</p>
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="border border-black px-[57px] py-[24px] hover:bg-[#DB4444] hover:text-white flex flex-col items-center justify-center">
//       <img src="./Category-Gamepad.svg" className="mb-[16px]" alt="Gaming" />
//       <p>Gaming</p>
//     </div>
//   </SwiperSlide>

// </Swiper>
//     </div>
//   );
// };

// export default Categories;