import React, { useEffect } from "react";
import About from "../../pages/About/About";
import Carousel from "../../components/Carousel/Carousel";
import HomeGallery from "../../components/Gallery/HomeGallery";
import Hero from "../../components/Hero/Hero";
import Team from "../../components/Team/Team";
import LandingPage from "../LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div style={{ overflowY: "scroll" }}>
      {/* <LandingPage /> */}

      <Hero />
      <About />
      <Team />
      {/* <Carousel /> */}

      <div className="home-gallery">
        <HomeGallery />
      </div>
    </div>
  );
};

export default Home;
