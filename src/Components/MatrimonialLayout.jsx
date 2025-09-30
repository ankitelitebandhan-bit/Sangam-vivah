import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import banner1 from "../assets/banner2.jpg";
import banner2 from "../assets/banner3.jpg";
import banner3 from "../assets/banner4.webp";
import banner4 from "../assets/banner5.jpg";
import banner5 from "../assets/banner6.jpeg";
import banner6 from "../assets/banner2.jpg";
import banner7 from "../assets/banner2.jpg";
import banner8 from "../assets/banner2.jpg";
import banner9 from "../assets/banner2.jpg";

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
];

const PremiumMatrimonialService = () => {
  return (
    <div className="max-w-8xl mx-auto p-4 ">
      <h2 className="text-center font-bold text-lg md:text-4xl underline underline-offset-4 italic text-pink-600 mb-6 mt-10">
        Premium Matrimonial Service Provider
      </h2>
      <p className="text-center text-2xl italic mb-8">
        across globe{" "}
        <span className="font-[cursive] underline "> Sangamvivah.com </span>
      </p>

      <Swiper
        modules={[Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        loopedslides={images.length}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
  .swiper-pagination {
    margin-top: 30px;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    opacity: 0.9;
    background: rgba(255,255,255,0.85);
  }
  .swiper-pagination-bullet-active {
    background: #ec4899;
  }
`}</style>
    </div>
  );
};

export default PremiumMatrimonialService;
