import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className=" max-w-screen lg:max-w-screen-lg mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    
      >
        <SwiperSlide>
          <img src="./Banner01.svg" className="max-w-screen lg:max-w-screen-lg mx-auto" alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Banner01.svg" className="max-w-screen lg:max-w-screen-lg mx-auto" alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Banner01.svg" className="max-w-screen lg:max-w-screen-lg mx-auto" alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Banner01.svg" className="max-w-screen lg:max-w-screen-lg mx-auto" alt="Banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
