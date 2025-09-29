import React from "react";
import Navbar from "../Components/Navbar";
import HeroSliderWithTopBar from "../Components/HeroSlider";
import MatrimonialLayout from "../Components/MatrimonialLayout";
import WhyChooseUs from "../Components/WhyChooseUs";
import EdgeStatsCircles from "../Components/EdgeStatsCircles";
import MembersCarousel from "../Components/MembersCarousel";
import SuccessStories from "../Components/SuccessStories";
import RealSuccess from "../Components/RealSuccess";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSliderWithTopBar />
      <MatrimonialLayout />
      <WhyChooseUs />
      <EdgeStatsCircles />
      <MembersCarousel />
      {/* <RealSuccess /> */}
      {/* <SuccessStories /> */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
