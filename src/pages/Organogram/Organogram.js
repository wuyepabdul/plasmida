import React, { useEffect } from "react";
import organogram from "../../images/organogram.png";
import "./Organogram.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

const Organogram = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container organaogram ">
      <MetaTags>
        <title>Organogram</title>
        <meta
          name="description"
          content="The PLASMIDA organizational structure is a definiton of how activities
          and tasks are allocated, supervised, coordinated and directed toward the
          achievement of the agency's goals and objectives"
        />
        <meta property="og:title" content="Organogram" />
        <meta property="og:image" content={photo} />
      </MetaTags>
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
