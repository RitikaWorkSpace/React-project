import React, { useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";


const EOP = () => {
  // const product = useSelector((state) => state.products.product);
  // carousal 

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? products.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === products.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // carousal
  const CustomArrowLeft = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -top-[5.5rem] right-[81px] z-10 p-2 bg-gray-200 rounded-full"
      >
        <IoIosArrowRoundBack className="w-6 h-6" />
      </button>
    );
  };

  const CustomArrowRight = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute -top-[5.5rem] right-[27px] z-10 p-2 bg-gray-200 rounded-full"
      >
        <IoIosArrowRoundForward className="w-6 h-6" />
      </button>
    );
  };

  return (
    <div className="max-w-[1170px] w-[100%] mt-[70px] mx-auto">
      <div className="flex mb-6">
        <img src="redRectangle.svg" className="max-w-[20px] w-[100%] "></img>
        <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
          Our Products
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="font-intel font-[600] text-[36px] ">
          Explore Our Products
        </h1>
        {/* <div className="flex gap-[10px]">
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
        </div> */}
      </div>

      {/* rc  product */}

      {/* <div className="mt-[60px]">    <Card
        product = {product}
          CustomArrowLeft={CustomArrowLeft}
          CustomArrowRight={CustomArrowRight}
        /></div> */}

      {/*  product */}

      {/* button */}
      <Link to="/AllCard">
        <div className="flex justify-center mt-[60px]">
          <button className="bg-[#DB4444] text-white py-[16px] px-[48px] text-center ">
            View All Products
          </button>
        </div>
      </Link>

      {/* button */}
    </div>
  );
};

export default EOP;
