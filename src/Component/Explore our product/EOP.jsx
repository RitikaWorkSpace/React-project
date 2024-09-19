import React from "react";
import Card from "../Card/Card";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EOP = () => {
  const sliderRef = useRef(null);

  const preButton = () => {
    let box = sliderRef.current; 
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const nextButton = () => {
    let box = sliderRef.current; 
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="max-w-[1170px] w-[100%] p-[10px] mt-[70px] mx-auto">
      <div className="flex mb-6">
        <img src="redRectangle.svg" className="max-w-[20px] w-[100%] "></img>
        <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
          Our Products
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-[60px]">
        <h1 className="font-intel font-[600] text-[36px] ">
          Explore Our Products
        </h1>
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

      {/* product */}

      <Card ref={sliderRef} />

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
