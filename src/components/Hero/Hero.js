import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="2000" class="hero-container">
      <div class="hero-carousel">
        <div class="hero-slide s1">
          <p>Team Work</p>
        </div>
        <div class="hero-slide s2">
          <p>Resourcefulness</p>
        </div>
        <div class="hero-slide s3">
          <p>Integrity</p>
        </div>
        <div class="hero-slide s4">
          <p>Pasion</p>
        </div>
        <div class="hero-slide s5">
          <p>Use your creativity</p>
        </div>
        <div class="hero-slide s6">
          <p>Use your creativity</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
