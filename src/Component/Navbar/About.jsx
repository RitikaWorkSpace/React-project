import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AboutSlider from "../Slider/AboutSlider";

const About = () => {
  return (
    <div>
      <div className='max-w-[1170px] w-[100%] mx-auto relative top-[80px] text-center md:text-left'>
        <Breadcrumbs />
      </div>

      {/* our story */}
      <div className="grid grid-cols-1  xs:mx-[10px] md:mx-0 lg:grid-cols-2 mx-[0px]  my-[143px]  ">
        <div className="ml-0 mr-0 md:ml-[135px] md:mr-[75px]">
          <h1 className=" xs:mt-0 xl:mt-[137px] font-intel font-[600] text-[54px] leading-[64px]  ">
            Our Story
          </h1>
          <p className="font-poppins font-[400] text-[16px]  leading-[26px] text-justify mt-[40px] text-wrap">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.<br></br> <br></br>Exclusive has more than 1
            Million products to offer, growing at a very fast. Exclusive offers
            a diverse assotment in categories ranging from consumer.{" "}
          </p>
        </div>
        <div className="flex justify-center mt-[30px] lg:justify-end w-full h-full">
          <img
            src="./AboutPageImg.svg"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>

      {/* our story */}

      {/* box  */}
      <div className="max-w-[1170px] w-full mx-auto  mt-[140px]   grid grid-cols-1 gap-[20px]     sm:grid-cols-2   lg:grid-cols-4 ">
        <div className=" border-2 px-[50px] py-[30px] flex justify-center items-center flex-col hover:bg-[#DB4444] hover:text-[#fff] ">
          <img
            src="./icon-delivery.svg"
            className="bg-black rounded-full"
            style={{
              outline: "10px solid rgba(0, 0, 0, 0.3)",
            }}
            alt="Icon Delivery"
          />
          <h1 className="my-[24px] font-intel text-[32px] font-[700]">
            10.5k{" "}
          </h1>
          <p className="font-poppins text-[16px] font-[400]">
            Sallers active our site
          </p>
        </div>
        <div className="border-2 px-[50px] py-[30px] flex justify-center items-center flex-col hover:bg-[#DB4444] hover:text-[#fff] ">
          <img
            src="./icon-delivery.svg"
            className="bg-black rounded-full"
            style={{
              outline: "10px solid rgba(0, 0, 0, 0.3)",
            }}
            alt="Icon Delivery"
          />
          <h1 className="my-[24px] font-intel text-[32px] font-[700]">
            33k
          </h1>
          <p className="font-poppins text-[16px] font-[400]">
            Sallers active our site
          </p>
        </div>
        <div className="border-2 px-[50px] py-[30px] flex justify-center items-center flex-col hover:bg-[#DB4444] hover:text-[#fff]">
          <img
            src="./icon-delivery.svg"
            className="bg-black rounded-full"
            style={{
              outline: "10px solid rgba(0, 0, 0, 0.3)",
            }}
            alt="Icon Delivery"
          />
          <h1 className="my-[24px] font-intel text-[32px] font-[700]">
          45.5k
          </h1>

          <p className="font-poppins text-[16px] font-[400]">
            Sallers active our site
          </p>
        </div>
        <div className="border-2 px-[50px] py-[30px] flex justify-center items-center flex-col hover:bg-[#DB4444] hover:text-[#fff] ">
          <img
            src="./icon-delivery.svg"
            className="bg-black rounded-full"
            style={{
              outline: "10px solid rgba(0, 0, 0, 0.3)",
            }}
            alt="Icon Delivery"
          />
          <h1 className="my-[24px] font-intel text-[32px] font-[700]">
          25k
          </h1>
          <p className="font-poppins text-[16px] font-[400]">
            Sallers active our site
          </p>
        </div>
      </div>
      {/* box  */}

      {/* photo section */}
      
      <AboutSlider/>
  {/* photo section */}

      {/* above footer */}
      <div className="max-w-[1170px] w-[100%] mx-auto my-[140px]">
        <div className="grid grid-cols-1 gap-[88px] md:grid-cols-3">
          <div className="  flex justify-center items-center flex-col ">
            <img
              src="./icon-delivery.svg"
              className="bg-black rounded-full mb-[24px]"
              style={{
                outline: "10px solid rgba(0, 0, 0, 0.3)",
              }}
              alt="Icon Delivery"
            />
          
            <p className="font-poppins text-[20px] font-[600] leading-[28px] mb-[8px]">FREE AND FAST DELIVERY</p>
            <p className="font-poppins text-[16px] font-[400]">
            Free delivery for all orders over $140
            </p>
          </div>
          <div className=" flex justify-center items-center flex-col ">
            <img
              src="./Icon-Customer service.svg"
              className="bg-black rounded-full mb-[24px]"
              style={{
                outline: "10px solid rgba(0, 0, 0, 0.3)",
              }}
              alt="Icon Delivery"
            />
                     <p className="font-poppins text-[20px] font-[600] leading-[28px] mb-[8px]">24/7 CUSTOMER SERVICE</p>
            <p className="font-poppins text-[16px] font-[400]">
            Friendly 24/7 customer support
            </p>
          </div>
          {/*  */}
          <div className="  flex justify-center items-center flex-col ">
            <img
              src="./Icon-secure.svg"
              className="bg-black rounded-full mb-[24px]"
              style={{
                outline: "10px solid rgba(0, 0, 0, 0.3)",
              }}
              alt="Icon Delivery"
            />
                     <p className="font-poppins text-[20px] font-[600] leading-[28px] mb-[8px]">MONEY BACK GUARANTEE</p>
            <p className="font-poppins text-[16px] font-[400]">
            We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
      {/* above footer */}
    </div>
  );
};

export default About;
