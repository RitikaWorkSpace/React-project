// import React, { useState } from "react";
// import Countdown from "../FlashSales/Countdown";
// import Card from "../Card/Card.jsx";
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useSelector } from "react-redux";


// const FlashSales = () => {

//   const product = useSelector((state) => state.products.product);


//   const CustomArrowLeft = ({ onClick }) => {
//     return (
//       <button
//         onClick={onClick}
//         className="absolute -top-[5.5rem] right-[81px] z-10 p-2 bg-gray-200 rounded-full"
//       >
//         <IoIosArrowRoundBack className="w-6 h-6" />
//       </button>
//     );
//   };

//   const CustomArrowRight = ({ onClick }) => {
//     return (
//       <button
//         onClick={onClick}
//         className="absolute -top-[5.5rem] right-[27px] z-10 p-2 bg-gray-200 rounded-full"
//       >
//         <IoIosArrowRoundForward className="w-6 h-6" />
//       </button>
//     );
//   };



//   return (
//     <div className="pb-[60px] border-b border-grey-500 w-full overflow-hidden">
//       <div className="max-w-[1170px] w-[100%] mx-auto">
//       <div className="flex mb-6 xs:ml-[20px] ">
//   <img src="redRectangle.svg" className="max-w-[20px] w-[100%]" alt="Red Rectangle"/>
//   <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
//     Today's
//   </h3>
// </div>


//   <div>
//   <div className="xs:pl-[20px] flex flex-col md:flex-row  md:gap-[87px] mb-[40px]">
//             {/* flash timer */}
//             <h1 className="font-intel font-[600] text-[36px]  ">
//               Flash Sales
//             </h1>

//             <div>
//               <Countdown />
//             </div>
//           </div>

//           <div className="button">
//             <button>1</button>
//             <button>2</button>
//           </div>
//   </div>








//         {/*  product */}

//         {/* <Card/> */}
//         <Card
//         product = {product}
//           CustomArrowLeft={CustomArrowLeft}
//           CustomArrowRight={CustomArrowRight}
//         />

//         {/*  product */}

//         <Link to="/AllCard">
//           <div className="flex justify-center mt-[60px] ">
//             <button className="bg-[#DB4444] text-white py-[16px] px-[48px] text-center ">
//               View All Products
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FlashSales;






// import React, { useState, useEffect } from "react";
// import Countdown from "../FlashSales/Countdown";
// import Card from "../Card/Card";
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
// import { useSelector } from "react-redux";

// const FlashSales = () => {
//   const product = useSelector((state) => state.products.product);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (product && product.length > 0) {
//       setLoading(false);
//     }
//   }, [product]);

//   const CustomArrowLeft = ({ onClick }) => (
//     <button
//       onClick={onClick}
//       className="absolute top-[50%] left-[-20px] z-10 p-2 bg-gray-200 rounded-full"
//     >
//       <IoIosArrowRoundBack className="w-6 h-6" />
//     </button>
//   );

//   const CustomArrowRight = ({ onClick }) => (
//     <button
//       onClick={onClick}
//       className="absolute top-[50%] right-[-20px] z-10 p-2 bg-gray-200 rounded-full"
//     >
//       <IoIosArrowRoundForward className="w-6 h-6" />
//     </button>
//   );

//   return (
//     <div className="pb-[60px] border-b border-grey-500 w-full overflow-hidden">
//       <div className="max-w-[1170px] mx-auto">
//         <div className="flex mb-6">
//           <img src="redRectangle.svg" className="max-w-[20px]" alt="Red Rectangle" />
//           <h3 className="text-[#DB4444] font-poppins font-semibold text-[16px] ml-[16px] my-auto">
//             Today's
//           </h3>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center mb-[40px]">
//           <h1 className="font-intel font-semibold text-[36px]">Flash Sales</h1>
//           <Countdown />
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-[300px]">Loading...</div>
//         ) : (
//           <Card
//             CustomArrowLeft={CustomArrowLeft}
//             CustomArrowRight={CustomArrowRight}
//             products={product} // Pass products as a prop if needed
//           />
//         )}

//         <Link to="/AllCard">
//           <div className="flex justify-center mt-[60px]">
//             <button className="bg-[#DB4444] text-white py-[16px] px-[48px] text-center">
//               View All Products
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FlashSales;



// useref
// import React, { useRef } from "react";
// import Countdown from "../FlashSales/Countdown";
// import Card from "../Card/Card.jsx";
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
// import Slider from "react-slick"; // Import slick slider
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useSelector } from "react-redux";

// const FlashSales = () => {
//   const product = useSelector((state) => state.products.product);

//   const sliderRef = useRef(null);

//   const goToSlide = (index) => {
//     sliderRef.current.slickGoTo(index);
//   };

//   const CustomArrowLeft = ({ onClick }) => {
//     return (
//       <button
//         onClick={onClick}
//         className="absolute -top-[5.5rem] right-[81px] z-10 p-2 bg-gray-200 rounded-full"
//       >
//         <IoIosArrowRoundBack className="w-6 h-6" />
//       </button>
//     );
//   };

//   const CustomArrowRight = ({ onClick }) => {
//     return (
//       <button
//         onClick={onClick}
//         className="absolute -top-[5.5rem] right-[27px] z-10 p-2 bg-gray-200 rounded-full"
//       >
//         <IoIosArrowRoundForward className="w-6 h-6" />
//       </button>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <CustomArrowRight />,
//     prevArrow: <CustomArrowLeft />,
//   };

//   return (
//     <div className="pb-[60px] border-b border-grey-500 w-full overflow-hidden">
//       <div className="max-w-[1170px] w-[100%] mx-auto">
//         <div className="flex mb-6 xs:ml-[20px] ">
//           <img src="redRectangle.svg" className="max-w-[20px] w-[100%]" alt="Red Rectangle" />
//           <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
//             Today's
//           </h3>
//         </div>

//         <div>
//           <div className="xs:pl-[20px] flex flex-col md:flex-row md:gap-[87px] mb-[40px]">
//             <h1 className="font-intel font-[600] text-[36px]">Flash Sales</h1>
//             <div>
//               <Countdown />
//             </div>
//           </div>

//           {/* Buttons to navigate to specific slides */}
//           <div className="button">
//             <button onClick={() => goToSlide(0)} className="px-4 py-2 bg-gray-300 rounded-md m-2">1</button>
//             <button onClick={() => goToSlide(1)} className="px-4 py-2 bg-gray-300 rounded-md m-2">2</button>
//           </div>
//         </div>

//         {/* Product slider */}
//         <Slider ref={sliderRef} {...settings}>
//           {product.map((item, index) => (
//             <Card key={index} product={item} />
//           ))}
//         </Slider>

//         <Link to="/AllCard">
//           <div className="flex justify-center mt-[60px]">
//             <button className="bg-[#DB4444] text-white py-[16px] px-[48px] text-center">
//               View All Products
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FlashSales;




// with  custom slider 
import React from "react";
import Countdown from "../FlashSales/Countdown";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";


const FlashSales = () => {




  const sliderRef = useRef(null);

  const preButton = () => {
    let box = sliderRef.current; // Access the .Slider div
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const nextButton = () => {
    let box = sliderRef.current; // Access the .Slider div
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };





  return (
    <div className="pb-[60px] border-b border-grey-500 w-full overflow-hidden">
      <div className=" w-[100%]  ">
        <div className="flex mb-6   max-w-[1170px] mx-auto w-full p-[10px] ">
          <img src="redRectangle.svg" className="max-w-[20px] w-[100%]" alt="Red Rectangle" />
          <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
            Today's
          </h3>
        </div>


        <div className="flex flex-col  sm:flex-row  justify-between max-w-[1170px] mx-auto w-full p-[10px]">
          <div className="  flex flex-col md:flex-row  md:gap-[87px] mb-[40px]">
            {/* flash timer */}
            <h1 className="font-intel font-[600] text-[36px]  ">
              Flash Sales
            </h1>


            <Countdown />

          </div>

          <div className="flex gap-[10px] ">

            <button
              onClick={preButton}
              className=" p-2 bg-gray-200 rounded-full h-[40px]"
            >
              <IoIosArrowRoundBack className="w-6 h-6" />
            </button>

            <button
              onClick={nextButton}
              className=" p-2 bg-gray-200 rounded-full h-[40px]"
            >
              <IoIosArrowRoundForward className="w-6 h-6" />
            </button>
          </div>


        </div>








        {/*  product */}

        {/* <Card/> */}
        <div>

          <Card ref={sliderRef} />
        </div>

        {/*  product */}

        <Link to="/AllCard">
          <div className="flex justify-center mt-[60px] ">
            <button className="bg-[#DB4444] text-white py-[16px] px-[48px] text-center ">
              View All Products
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FlashSales; 