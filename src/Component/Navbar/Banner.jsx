import React from "react";
import Slider from "../Slider/BannerSlider";

const Banner = () => {
  return (
    <div className="border-t-[#e5e7eb]  border-t-[0.5px] ">
      <div className=" grid grid-cols-1 lg:grid-cols-[20%_auto] max-w-[1170px] w-[100%] mx-auto  ">
        <div className=" xs:pl-[20px] mb-[40px] xs:hidden lg:block">
          <ul className="font-poppins text-[16px] leading-[24px] max-w-[217px] w-[100%] pt-[40px] border-r-[#cacacc]  border-r-[0.5px]">
            <div className="flex items-center gap-[32px]">
              <li className="font-[400] mb-[16px] cursor-pointer">Woman’s Fashion</li>
              <img
                src="./listRightVector.svg"
                alt="banner list arrow icon"
                className="max-w-[7.78px] w-[100%] mb-[16px]"
              />
            </div>

            <div className="flex gap-[60px] ">
              <li className="font-[400] mb-[16px] cursor-pointer">Men’s Fashion</li>
              <img
                src="./listRightVector.svg"
                alt="banner list arrow icon"
                className="max-w-[7.78px] w-[100%] mb-[16px]"
              />
            </div>

            <li className="font-[400] mb-[16px] cursor-pointer">Electronics</li>
            <li className="font-[400] mb-[16px] cursor-pointer">Home & Lifestyle</li>
            <li className="font-[400] mb-[16px] cursor-pointer">Medicine</li>
            <li className="font-[400] mb-[16px] cursor-pointer">Sports & Outdoor</li>
            <li className="font-[400] mb-[16px] cursor-pointer">Baby’s & Toys</li>
            <li className="font-[400] mb-[16px] cursor-pointer">Groceries & Pets</li>
            <li className="font-[400] mb-[16px] cursor-pointer">Health & Beauty</li>
          </ul>
        </div>
        {/* select list */}
        <div className="xs:block lg:hidden flex justify-center w-full ">
        <select
  id="categories"
  className=" w-full border py-2 px-4 mt-[20px] text-black bg-white cursor-pointer  focus:outline-none hover:bg-[#DB4444] hover:text-white"
>
  <option className="bg-white text-[#DB4444] font-[400] ">Categories..</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Woman’s Fashion</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Men’s Fashion</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Electronics</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Home & Lifestyle</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Medicine</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Sports & Outdoor</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Baby’s & Toys</option>
  <option className="bg-white font-[400] text-[#DB4444]  font-boldhover:bg-[#DB4444] hover:text-white cursor-pointer">Groceries & Pets</option>
  <option className="bg-white text-[#DB4444] font-[400]  hover:bg-[#DB4444] hover:text-white cursor-pointer">Health & Beauty</option>
</select>

        </div>
        {/* select list */}
        <div className="py-[40px]  lg:max-w-[800px] xl:max-w-[892px] w-full lg:ml-[20px]">
          <Slider />
        </div>

      </div>
    </div>
  );
};

export default Banner;

























































// =========================================================================

// import React from "react";
// import Slider from "../Slider/BannerSlider";

// const Banner = () => {
//   return (
//     <div className="border-t-[#e5e7eb]  border-t-[0.5px] ">
//       <div className="  mx-auto w-full px-[135px] flex  border-2 border-red-500">
//         <div className="mb-[40px] xs:hidden lg:block border-r-[#cacacc]  border-r-[0.5px] pr-[16px]">
//           <ul className="font-poppins text-[16px] leading-[24px] max-w-[217px] max-h-[334px] w-[100%] pt-[40px] ">
//             <div className="flex items-center gap-[32px]">
//               <li className="font-[400] mb-[16px] cursor-pointer">Woman’s Fashion</li>
//               <img
//                 src="./listRightVector.svg"
//                 alt="banner list arrow icon"
//                 className="max-w-[7.78px] w-[100%] mb-[16px]"
//               />
//             </div>

//             <div className="flex gap-[60px] ">
//               <li className="font-[400] mb-[16px] cursor-pointer">Men’s Fashion</li>
//               <img
//                 src="./listRightVector.svg"
//                 alt="banner list arrow icon"
//                 className="max-w-[7.78px] w-[100%] mb-[16px]"
//               />
//             </div>

//             <li className="font-[400] mb-[16px] cursor-pointer">Electronics</li>
//             <li className="font-[400] mb-[16px] cursor-pointer">Home & Lifestyle</li>
//             <li className="font-[400] mb-[16px] cursor-pointer">Medicine</li>
//             <li className="font-[400] mb-[16px] cursor-pointer">Sports & Outdoor</li>
//             <li className="font-[400] mb-[16px] cursor-pointer">Baby’s & Toys</li>
//             <li className="font-[400] mb-[16px] cursor-pointer">Groceries & Pets</li>
//             <li className="font-[400] mb-[16px] cursor-pointer">Health & Beauty</li>
//           </ul>
//         </div>
//         {/* select list */}
//         <div className="xs:block lg:hidden">
//         <select
//   id="categories"
//   className="w-full border py-2 px-4 mt-[20px] text-black bg-white cursor-pointer appearance-none focus:outline-none hover:bg-[#DB4444] hover:text-white"
// >
//   <option className="bg-white text-[#DB4444] font-[400]">Categories..</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Woman’s Fashion</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Men’s Fashion</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Electronics</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Home & Lifestyle</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Medicine</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Sports & Outdoor</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Baby’s & Toys</option>
//   <option className="bg-white font-[400] text-[#DB4444] font-boldhover:bg-[#DB4444] hover:text-white cursor-pointer">Groceries & Pets</option>
//   <option className="bg-white text-[#DB4444] font-[400] hover:bg-[#DB4444] hover:text-white cursor-pointer">Health & Beauty</option>
// </select>

//         </div>
//         {/* select list */}
//         <div className="pl-[45px] pt-[40px]  md:max-w-[970px] w-full ">
//           <Slider />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
