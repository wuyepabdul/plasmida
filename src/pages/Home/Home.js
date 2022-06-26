import React, { useEffect } from "react";
import About from "../../pages/About/About";
import Carousel from "../../components/Carousel/Carousel";
import HomeGallery from "../../components/Gallery/HomeGallery";
import Hero from "../../components/Hero/Hero";
import Team from "../../components/Team/Team";
import LandingPage from "../LandingPage/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div style={{ overflowY: "scroll" }}>
      <MetaTags>
        <title>Home</title>
        <meta
          name="description"
          content="The commitment and determination of the Governor to move the state
          out of economic stagnation to a commercial hub of the nation, was
          demonstrated through the establishment of the Plateau State
          Microfinance Development Agency."
        />
        <meta property="og:title" content="Home" />
        <meta property="og:image" content={photo} />
      </MetaTags>
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
