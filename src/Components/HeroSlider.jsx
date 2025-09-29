import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpeg";

export default function HeroSliderWithTopBar() {
  const slides = [
    // random placeholder images — replace these with your own image paths
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
  ];

  return (
    <>
      <main>
        {/* HERO / SLIDER */}
        <section className="w-full h-screen md:h-[66vh] relative overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {slides.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-screen md:h-[66vh] relative">
                  <img
                    src={src}
                    alt={`slide-${idx}`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />

                  <div className="absolute left-6 md:left-16 top-1/2 transform -translate-y-1/2 md:max-w-lg bg-white-50/40 shadow-2xl rounded-2xl backdrop-blur-2xl text-white">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-[cursive] italic tracking-wide leading-tight">
                      FIND YOUR
                      <br />
                      PERFECT MATCH
                    </h3>
                    <p className="mt-4 text-lg italic md:text-base opacity-90">
                      Start your journey with{" "}
                      <span className="text-2xl text-pink-400">
                        Sangam Vivah
                      </span>
                    </p>
                    <button className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-5 py-2 rounded-full">
                      Start Your Journey
                    </button>

                    <div className="mt-6 md:hidden"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
           height: 10px;
          opacity: 0.9;
          background: rgba(255,255,255,0.85);
        }
        .swiper-pagination-bullet-active {
          background: #ec4899; /* tailwind pink-500 */
        }
      `}</style>
    </>
  );
}
