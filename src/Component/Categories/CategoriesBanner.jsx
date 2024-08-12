import React from "react";
import CountdownBanner from "../Categories/CountdownBanner";


const CategoriesBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1170px] w-[100%] mx-auto bg-black mt-[140px]">
      <div className="m-[37px]">
        <h6 className="text-[#00FF66] ">Categories</h6>
        <h1 className="text-[600] text-[48px] text-white">
          Enhance Your <br></br>Music Experience
        </h1>

        <CountdownBanner />

        <button className="bg-[#00FF66] text-white py-[16px] px-[48px] text-center mt-[10px] ">
          Buy Now!
        </button>
      </div>

      {/* new try */}
      <div className="relative mt-[37px] mb-[47px]">
        <div className="absolute md:top-[101px] md:right-[208px] md:p-[106px] xs:top-[40px] xs:right-[104px] xs:p-[71px] lg:top-[71px] shadow-custom-white rounded-[75%] "></div>
        <div className="">
          <img
            src="./CatergoriesSpeaker.svg"
            className="relative  "
            alt="Category Speaker"
          />
        </div>
      </div>

      {/* filter drop-shadow */}
      {/* <div>
<img src='./CatergoriesSpeaker.svg' className='custom-drop-shadow ' alt="Category Speaker" />   
</div> */}
      {/* filter drop-shadow  */}
    </div>
  );
};

export default CategoriesBanner;
