import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules";
import "./AboutSlider.css"; // Make sure to import your CSS file

function AboutSlider() {
  return (
    <Swiper
      slidesPerView={1}  // Show 1 slide on mobile
      spaceBetween={20}  // Space between slides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: '.custom-pagination', // Custom class for pagination
      }}
      breakpoints={{
        320:{
          slidesPerView: 1, 
          spaceBetween: 20,
        },
        768: {    
          slidesPerView: 2, 
          spaceBetween: 20,
        },
        1024: {      
          slidesPerView: 3, 
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper max-w-[1170px] w-full p-[10px] mx-auto " 
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="mt-[140px] max-w-[1170px] w-full mx-auto flex justify-center ">
            <div className="card max-w-[370px]">
              <div className="card-img">
                <img
                  className="bg-[#F5F5F5] px-[67px] pt-[39px]"
                  src="./AboutPhoto.svg"
                  alt="Tom Cruise"
                />
              </div>
              <div className="card-body mt-[32px]">
                <h1 className="text-[32px] font-[500] font-intel leading-[30px]">
                  Tom Cruise
                </h1>
                <p className="font-poppins text-[16px] font-[400] mt-[8px]">
                  Founder & Chairman
                </p>
                <ul className="list-none flex gap-[24px] mt-[24px]">
                  <li>
                    <img src="./AboutSS0.svg" alt="twitter" />
                  </li>
                  <li>
                    <img src="./AboutSS1.svg" alt="instagram" />
                  </li>
                  <li>
                    <img src="./AboutSS2.svg" alt="linkedIn" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="custom-pagination mt-[40px]"></div> {/* Custom pagination with margin */}
    </Swiper>
  );
}

export default AboutSlider;
