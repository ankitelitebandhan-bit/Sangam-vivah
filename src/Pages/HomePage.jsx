import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import HeroSliderWithTopBar from "../Components/HeroSlider";
import MatrimonialLayout from "../Components/MatrimonialLayout";
import WhyChooseUs from "../Components/WhyChooseUs";
import EdgeStatsCircles from "../Components/EdgeStatsCircles";
import MembersCarousel from "../Components/MembersCarousel";
import SuccessStories from "../Components/SuccessStories";
import RealSuccess from "../Components/RealSuccess";
import Footer from "../Components/Footer";
// import Connect from "../Components/Connect";
import Loader from "../Components/Loader";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <HeroSliderWithTopBar />
      <MatrimonialLayout />
      <WhyChooseUs />
      <EdgeStatsCircles />
      <MembersCarousel />
      <RealSuccess />
      <SuccessStories />
      {/* <Connect /> */}
      <Footer />
    </>
  );
};

export default HomePage;
