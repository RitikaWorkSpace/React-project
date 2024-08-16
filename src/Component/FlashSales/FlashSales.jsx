import React, { useState } from "react";
import Countdown from "../FlashSales/Countdown";
import Card from "../Card/Card.jsx";
// import products from "../../data.jsx";
import {Link} from 'react-router-dom';

const FlashSales = () => {


 
  // carousal
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };
  
  // carousal




  return (
    <div className="pb-[60px] border-b border-grey-500 w-full overflow-hidden">
      <div className="max-w-[1170px] w-[100%] mx-auto">
        {/* red heading */}

        <div className="flex mb-6">
          <img src="redRectangle.svg" className="max-w-[20px] w-[100%] "></img>
          <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
            Today's
          </h3>
        </div>
        {/* red heading */}

        <div className="flex flex-col md:flex-row  lg:flex-row justify-between items-center mb-[40px]">
          <div className="flex flex-col md:flex-row ">
            {/* flash timer */}
            <h1 className="font-intel font-[600] text-[36px] mr-[87px] ">
              Flash Sales
            </h1>
           

            <div>
            <Countdown  />
            </div>
          </div>

          <div className=" gap-[10px]  flex md:flex-row">
            <div className="flex items-center justify-center bg-gray-300 rounded-full p-2 h-[36px]">
              <img
                src="./arrowLeft.svg"
                alt="Arrow Left"
                className="max-w-[16px] w-[100%] h-full "
                onClick={handlePrev}
              />
            </div>
            <div className="flex items-center justify-center bg-gray-300 rounded-full p-2 h-[36px]">
              <img
                src="./arrowRight.svg"
                alt="Arrow Right"
                className="max-w-[16px] w-[100%] h-full"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>

    {/*  product */}
{/* <div className="flex gap-[30px] mt-[20px] transition-transform duration-300" 
     style={{ transform: `translateX(-${currentIndex * 250}px)` }}>
  {products.map((item) => (
    <Card item={item} key={item.id} />
  ))}
</div> */}

<Card/>







{/*  product */}
   

 




<Link to='/AllCard'>
<div className="flex justify-center mt-[60px] ">
          <button
            
            className="bg-[#DB4444] text-white py-[16px] px-[48px] text-center "
          >
            View All Products
          </button>
        </div>
</Link>
       
      </div>
    </div>
  );
};

export default FlashSales;


