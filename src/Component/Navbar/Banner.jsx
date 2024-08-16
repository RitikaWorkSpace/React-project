// import React from "react";




// const Banner = () => {
 
//   return (
//     <div className="border-t-[#e5e7eb]  border-t-[0.5px] ">
//       <div className=" grid grid-cols-[20%_auto] max-w-[1170px] w-[100%] mx-auto  ">
//         <div className="mb-[40px]">
//           <ul className="font-poppins text-[16px] leading-[24px] max-w-[217px] w-[100%] pt-[40px] border-r-[#cacacc]  border-r-[0.5px]">
//             <div className="flex items-center gap-[32px]">
//               <li className="font-[400] mb-[16px]">Woman’s Fashion</li>
//               <img
//                 src="./listRightVector.svg"
//                 alt="banner list arrow icon"
//                 className="max-w-[7.78px] w-[100%] mb-[16px]"
//               />
//             </div>

//             <div className="flex gap-[60px] ">
//               <li className="font-[400] mb-[16px]">Men’s Fashion</li>
//               <img
//                 src="./listRightVector.svg"
//                 alt="banner list arrow icon"
//                 className="max-w-[7.78px] w-[100%] mb-[16px]"
//               />
//             </div>

//             <li className="font-[400] mb-[16px]">Electronics</li>
//             <li className="font-[400] mb-[16px]">Home & Lifestyle</li>
//             <li className="font-[400] mb-[16px]">Medicine</li>
//             <li className="font-[400] mb-[16px]">Sports & Outdoor</li>
//             <li className="font-[400] mb-[16px]">Baby’s & Toys</li>
//             <li className="font-[400] mb-[16px]">Groceries & Pets</li>
//             <li className="font-[400] mb-[16px]">Health & Beauty</li>
//           </ul>
//         </div>
//         <div className="py-[40px] ml-[20px]">
//           <img src="./Banner01.svg" className="bg-cover "></img>
//         </div>

       
      


//       </div>
//     </div>
//   );
// };

// export default Banner;














// =========================================================================






import React from "react";
import Slider from '../Slider/Slider'




const Banner = () => {
 
  return (
    <div className="border-t-[#e5e7eb]  border-t-[0.5px] ">
      <div className=" grid grid-cols-1 lg:grid-cols-[20%_auto] max-w-[1170px] w-[100%] mx-auto  ">
        <div className="mb-[40px] xs:hidden lg:block">
          <ul className="font-poppins text-[16px] leading-[24px] max-w-[217px] w-[100%] pt-[40px] border-r-[#cacacc]  border-r-[0.5px]">
            <div className="flex items-center gap-[32px]">
              <li className="font-[400] mb-[16px]">Woman’s Fashion</li>
              <img
                src="./listRightVector.svg"
                alt="banner list arrow icon"
                className="max-w-[7.78px] w-[100%] mb-[16px]"
              />
            </div>

            <div className="flex gap-[60px] ">
              <li className="font-[400] mb-[16px]">Men’s Fashion</li>
              <img
                src="./listRightVector.svg"
                alt="banner list arrow icon"
                className="max-w-[7.78px] w-[100%] mb-[16px]"
              />
            </div>

            <li className="font-[400] mb-[16px]">Electronics</li>
            <li className="font-[400] mb-[16px]">Home & Lifestyle</li>
            <li className="font-[400] mb-[16px]">Medicine</li>
            <li className="font-[400] mb-[16px]">Sports & Outdoor</li>
            <li className="font-[400] mb-[16px]">Baby’s & Toys</li>
            <li className="font-[400] mb-[16px]">Groceries & Pets</li>
            <li className="font-[400] mb-[16px]">Health & Beauty</li>
          </ul>
        </div>
        {/* select list */}
        <div className="xs:block lg:hidden">
          <select className="w-full border border-gray-300  py-2 px-4">
            <option>Woman’s Fashion</option>
            <option>Men’s Fashion</option>
            <option>Electronics</option>
            <option>Home & Lifestyle</option>
            <option>Medicine</option>
            <option>Sports & Outdoor</option>
            <option>Baby’s & Toys</option>
            <option>Groceries & Pets</option>
            <option>Health & Beauty</option>
          </select>
        </div>
        {/* select list */}
        <div className="py-[40px] ml-[20px]">
         <Slider/>
        </div>

       
      


      </div>
    </div>
  );
};

export default Banner;