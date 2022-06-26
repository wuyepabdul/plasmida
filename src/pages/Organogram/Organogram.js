import React, { useEffect } from "react";
import organogram from "../../images/organogram.png";
import "./Organogram.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Organogram = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container organaogram ">
      <p
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {" "}
        The PLASMIDA organizational structure is a definiton of how activities
        and tasks are allocated, supervised, coordinated and directed toward the
        achievement of the agency's goals and objectives
      </p>
      <div
        class="card"
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img src={organogram} class="card-img-top" alt="..." />
        <p></p>
      </div>
    </div>
  );
};

export default Organogram;
