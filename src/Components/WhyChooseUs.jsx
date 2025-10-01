import React from "react";
import banner2 from "../assets/banner4.webp";

const WhyChooseUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:flex md:space-x-10 items-center ">
      <div className="md:w-1/2 text-left">
        <h3 className="text-xl md:text-4xl  font-semibold text-pink-600 italic underline mb-4">
          Why Choose Us?
        </h3>
        <h4 className="text-lg italic  text-gray-700 mb-6">
          Searching for a life partner who aligns with your values, lifestyle,
          and family expectations? Welcome to Sangamvivah.Com — Delhi’s trusted
          name in premium matrimonial services. At Sangamvivah, we believe that
          finding the right match isn't just about compatibility — it's about
          building a future rooted in trust, tradition, and understanding.
          Serving distinguished communities such as Agrawal, Baniya, Punjabi,
          Jain, and Marwari, our approach is deeply personalized and culturally
          conscious. What sets us apart?
          <ul className="list-disc mt-10 mb-10">
            <li>Handpicked, verified profiles tailored to your preferences</li>
            <li>Expert matchmaking guidance with complete confidentiality</li>
            <li>
              A perfect balance of traditional values and modern sensibilities.
            </li>
          </ul>
          Whether you're looking for an academically accomplished partner, a
          professionally established individual, or a family that shares your
          cultural foundation, our team is dedicated to helping you take the
          next step with confidence. At Sangamvivah.Com, we're more than just
          matchmakers — we're facilitators of meaningful connections. Discover
          why discerning families across Delhi trust us to help shape their most
          important journey.
        </h4>
        <button className="bg-pink-600 text-white text-sm md:text-base px-6 py-2 rounded-full hover:bg-red-800 transition flex items-center gap-2 max-w-max">
          Explore More
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={banner2}
          alt="Matrimonial Stage"
          className="rounded-lg shadow-lg w-full object-cover hover:scale-110 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
