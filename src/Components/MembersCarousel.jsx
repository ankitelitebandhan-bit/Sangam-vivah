import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpeg";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const MembersCarousel = () => {
  const members = [
    {
      id: "EB20000678",
      profession: "Data Analyst",
      location: "Berlin, Germany",
      image: banner2,
    },
    {
      id: "EB20000766",
      profession: "Entrepreneur",
      location: "Montreal, Canada",
      image: banner3,
    },
    {
      id: "EB20000804",
      profession: "MBA",
      location: "London, UK",
      image: banner4,
    },
    {
      id: "EB20001234",
      profession: "Nurse",
      location: "Sydney, Australia",
      image: banner5,
    },
    {
      id: "EB20000912",
      profession: "Designer",
      location: "Nice, France",
      image: banner6,
    },
    // You can add more here
  ];

  return (
    <div className="py-12 bg-[#ffffff]">
      <h2 className="text-3xl md:text-4xl italic font-bold pt-20 text-center text-pink-600 mb-16">
        Our Happy Members
      </h2>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
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
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border-2 border-pink-400 rounded-xl p-4 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={`Profile of ${member.id}`}
                    className="h-24 w-24 rounded-full border-4 border-orange-300 object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-800">ID- {member.id}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {member.profession}
                  </p>
                  <span className="inline-block mt-2 bg-pink-600 text-white text-sm px-3 py-1 rounded-full">
                    {member.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MembersCarousel;
