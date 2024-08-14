import React, { useState } from "react";
import Countdown from "../FlashSales/Countdown";
// import Card from "../Card/Card.jsx";
// import products from "../../data.jsx";

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
      

      <h1 className="font-intel font-[600] text-[36px] mr-[87px] my-[50px] ">
            All Products.
            </h1>

       

 

       {/*  product */}
<div className="flex  gap-[30px] mt-[20px] transition-transform duration-300 mb-[140px] xs:items-center justify-center" 
     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
  <div className="flex overflow-hidden">
    <div
      className="grid grid-cols-1  sm:grid-cols-2    md:grid-cols-2   lg:grid-cols-3  xl:grid-cols-4 gap-[30px] w-full"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  </div>
</div>
{/*  product */}




      
      </div>
    </div>
  );
};

export default FlashSales;


