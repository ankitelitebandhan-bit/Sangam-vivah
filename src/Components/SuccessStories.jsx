import React from "react";
import banner1 from "../assets/banner2.jpg";
import banner2 from "../assets/banner3.jpg";
import banner3 from "../assets/banner4.webp";
import banner4 from "../assets/banner5.jpg";
import banner5 from "../assets/banner6.jpeg";
import banner6 from "../assets/banner2.jpg";
import banner7 from "../assets/banner3.jpg";
import banner8 from "../assets/banner2.jpg";
import banner9 from "../assets/banner5.jpg";

const SuccessStories = () => {
  const stories = [
    {
      name: "Dr Anmol Ratnakar & Dr Pranjali",
      story:
        "We are Dr. Anmol and Dr. Pranjali from Mumbai, and our beautiful journey began on Elite Bandhan – Bandhan Apna Sa. Like many others, we were searching for more than just a match—we wanted understanding.",
      location: "Mumbai",
      image: banner1,
    },
    // {
    //   name: "Dr. Shreeram Ajegaonkar & Dr. Shraddha Ajegaonkar",
    //   story:
    //     "As doctors from the Marathi community, both of us were searching for more than a typical proposal. We wanted a partner who would share our cultural values, understand our responsibilities, and walk with us.",
    //   location: "Pune",
    //   image: banner2,
    // },
    // {
    //   name: "Nishant Sharma & Mrs. Gaurisha Sharma",
    //   story:
    //     "Every journey of companionship has a special beginning, and ours started with Elite Bandhan – Bandhan Apna Sa. We are Mr. Nishant and Mrs. Gaurisha Sharma, and we are delighted to share our story as a couple.",
    //   location: "Jaipur",
    //   image: banner3,
    // },
    // {
    //   name: "Asif Khan & Shamim",
    //   story:
    //     "During my school years, there was a girl I secretly admired. I liked her deeply but never had the courage to speak to her. Coming from a conservative family, I always feared what people would say.",
    //   location: "Delhi",
    //   image: banner4,
    // },
    // {
    //   name: "Anas Khan & Shumaila Siddiqui",
    //   story:
    //     "Hello, my name is Shumaila, and I am an engineer by profession. Like many working professionals, my life was always busy with projects, deadlines, and responsibilities.",
    //   location: "Delhi",
    //   image: banner5,
    // },
    // {
    //   name: "Mohit Jain & Nidhi Agarwal",
    //   story:
    //     "Hello, I am Mohit Jain from Haryana, and I want to share my experience with you. Being a Manglik, finding the right life partner was one of the biggest challenges of my life.",
    //   location: "Haryana",
    //   image: banner6,
    // },
    // {
    //   name: "Mohit Jain & Nidhi Agarwal",
    //   story:
    //     "Hello, I am Mohit Jain from Haryana, and I want to share my experience with you. Being a Manglik, finding the right life partner was one of the biggest challenges of my life.",
    //   location: "Haryana",
    //   image: banner7,
    // },
    // {
    //   name: "Mohit Jain & Nidhi Agarwal",
    //   story:
    //     "Hello, I am Mohit Jain from Haryana, and I want to share my experience with you. Being a Manglik, finding the right life partner was one of the biggest challenges of my life.",
    //   location: "Haryana",
    //   image: banner8,
    // },
    // {
    //   name: "Mohit Jain & Nidhi Agarwal",
    //   story:
    //     "Hello, I am Mohit Jain from Haryana, and I want to share my experience with you. Being a Manglik, finding the right life partner was one of the biggest challenges of my life.",
    //   location: "Haryana",
    //   image: banner9,
    // },
  ];

  return (
    <div className="min-h-screen bg-{##FEF2EF} py-10 px-4 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-100/40 backdrop-blur-md rounded-xl  shadow-md p-6 hover:shadow-2xl hover:border-pink-600 hover:border-2 transition hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-14 h-14 rounded-full border-2 border-pink-600 object-cover mr-3"
                />
                <h3 className="font-semibold text-lg">{story.name}</h3>
              </div>
              <p
                className="text-sm text-gray-700 mb-4 truncate-text"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                “{story.story}”
              </p>
              <div className="flex justify-between items-center">
                <button className=" text-white text-sm font-semibold px-4 py-2 rounded-4xl bg-pink-600">
                  See Full Story
                </button>
                <span className="text-xs text-gray-500">
                  Married | {story.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
