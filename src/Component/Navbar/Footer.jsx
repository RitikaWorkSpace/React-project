import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-[#FAFAFA] pt-[80px] ">
      <div className=" grid grid-cols-1 max-w-[1170px] w-[100%] m-auto  md:grid-cols-3 lg:grid-cols-5 px-[20px] xl:px-0  gap-[87px]">
        <div className="text-center mx-auto sm:w-full sm:max-w-[217px]">
          <div className="font-inter font-[700] text-[24px] leading-[24px] mb-[24px]">
            Exclusive
          </div>
          <div className="font-poppins font-[500] text-[20px] leading-[28px] mb-[24px]">
            Subscribe
          </div>
          <div>
            <div className="font-poppins font-[400] text-[16px] leading-[24px] mb-[16px]">
              Get 10% off your first order
            </div>

            <div className="flex justify-between border border-solid  p-[8px] max-w-[217px] w-[100%] ">
              <input
                typeof="text"
                placeholder="Enter your email"
                className="border-none outline-none  max-w-[130px] w-[100%] bg-black text-[#FAFAFA] opacity-[40%] text-[13px] lg:text-[12px] xl:text-[13px]  "
              ></input>
              <img
                src="/footerInputArrow.svg"
                alt="footerInputArrow"
                className="max-w-[20px] w-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="text-center mx-auto sm:w-full sm:max-w-[217px]">
          <div className="font-poppins font-[500] text-[20px] leading-[28px] mb-[24px]">
            Support
          </div>
          <ul className="list-none font-poppins font-[400] text-[16px] leading-[24px]">
            <li className="mb-[16px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className="mb-[16px]">exclusive@gmail.com</li>
          </ul>
        </div>
        <div className="text-center mx-auto sm:w-full sm:max-w-[217px]">
          <div className="font-poppins font-[500] text-[20px] leading-[28px] mb-[24px]">
            Account
          </div>
          <ul className="list-none font-poppins font-[400] text-[16px] leading-[24px] ">
            <li className="mb-[16px]">Login / Register</li>
            <li className="mb-[16px]">Cart</li>
            <li className="mb-[16px]">Wishlist</li>
            <li className="mb-[16px]">Shop</li>
          </ul>
        </div>
        <div className="text-center mx-auto sm:w-full sm:max-w-[217px]">
          <div className="font-poppins font-[500] text-[20px] leading-[28px] mb-[24px]">
            Quick Link
          </div>
          <ul className="list-none font-poppins font-[400] text-[16px] leading-[24px] ">
            <li className="mb-[16px]">Privacy Policy</li>
            <li className="mb-[16px]">Terms Of Use</li>
            <li className="mb-[16px]">FAQ</li>
            <li className="mb-[16px]">Contact</li>
          </ul>
        </div>
        <div className="text-center mx-auto sm:w-full sm:max-w-[217px]">
          <div className="font-poppins font-[500] text-[20px] leading-[28px] mb-[24px]">
            Download App
          </div>
          <div>
            <p className="opacity-[70%] font-[500] text-[12px] leading-[18px] mb-[8px]">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-[10px]">
              <div>
                <img src="/Qrcode.svg" alt="Qrcode" />
              </div>
              <div>
                <div>
                  <img src="/AppStore.svg" alt="AppStore" />
                </div>
                <div>
                  <img src="/GooglePlay.svg" alt="GooplePlay" />
                </div>
              </div>
            </div>
            <ul className="list-none flex gap-[24px] mt-[24px]">
              <li>
                <img src="/Facebook.svg" alt="facebook" />
              </li>
              <li>
                <img src="/Twitter.svg" alt="twitter" />
              </li>
              <li>
                <img src="/instagram.svg" alt="instagram" />
              </li>
              <li>
                <img src="/LinkedIn.svg" alt="linkedIn" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-[#FFFFFF] font-poppins font-[400] text-[16px] leading-[24px] text-center mt-[60px] opacity-[20%] border border-t-1">
        &copy; &nbsp;Copyright Rimel 2022. All right reserved
      </p>
    </div>
  );
};

export default Footer;
