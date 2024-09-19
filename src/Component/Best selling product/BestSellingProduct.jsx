import Card from "../Card/Card";
import { Link } from "react-router-dom";


const BestSellingProduct = () => {



  return (
    <div className="max-w-[1170px] w-[100%] mx-auto mt-[80px] p-[10px]">
      <div className="flex mb-6">
        <img
          src="./redRectangle.svg"
          className="max-w-[20px] w-[100%] "
          alt="Red Rectangle"
        />
        <h3 className="text-[#DB4444] font-poppins font-[600] text-[16px] ml-[16px] my-auto leading-[20px]">
          This Month
        </h3>
      </div>

      <div className="flex flex-col  gap-[10px] lg:flex-row justify-between items-start lg:items-center">
        <h1 className="font-inter text-black text-[36px] font-[600] leading-[48px] ">
          Best Selling Products
        </h1>

        <Link to="/AllCard">
          {/* <button className="bg-[#DB4444] text-white py-2 px-4 md:py-[16px] md:px-[48px] mt-4 lg:mt-0"> */}
          <button className="bg-[#DB4444] text-white py-[16px] px-[48px]   ">
            View All
          </button>
        </Link>
      </div>

      {/*  product */}

      <div className="mt-[60px]">
   <Card/>
      </div>

      {/*  product */}
    </div>
  );
};

export default BestSellingProduct;
