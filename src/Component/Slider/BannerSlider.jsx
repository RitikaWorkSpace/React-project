// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './BannerSlider.css';
// import { Autoplay, Pagination } from 'swiper/modules';

// const Slider = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   return (
//     <div className="flex items-center justify-center w-full">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={ [Autoplay, Pagination]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper w-full flex justify-center items-center "
//       >
//         <SwiperSlide className="SS">
//           <img src="./Banner01.svg" className="w-full h-full object-cover" alt="Banner 1" />
//         </SwiperSlide>
//         <SwiperSlide className="">
//           <img src="./Banner01.svg" className="w-full h-full object-cover" alt="Banner 1" />
//         </SwiperSlide>

//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Make sure Navigation is imported

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]} // Ensure Navigation is included here
        className="mySwiper max-w-[892px] flex justify-center"
      >
        <SwiperSlide>
          <img src="./Banner01.svg" className="object-contain" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Banner01.svg" className="object-contain" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Banner01.svg" className="object-contain" alt="Banner 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}




// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './BannerSlider.css';
// import { Autoplay, Pagination } from 'swiper/modules';

// const Slider = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   return (
//     <div className="flex items-center justify-center w-full">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Autoplay, Pagination]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper w-full flex justify-center items-center"
//       >
//         <SwiperSlide className="SS">
//           <img 
//             src="./Banner01.svg" 
//             className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
//             alt="Banner 1" 
//           />
//         </SwiperSlide>
//         <SwiperSlide className="">
//           <img 
//             src="./Banner01.svg" 
//             className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" 
//             alt="Banner 1" 
//           />
//         </SwiperSlide>

//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;
