import React, { useEffect } from "react";
import dgPhoto from "../../images/dg.jpg";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutMain = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="mb-5">
      <div className="row about-row py-5 mb-3">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" mb-4 title text-center"
        >
          Welcome to PLASMIDA
        </h2>

        <div
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="col-md-4 col-sm-12"
        >
          <div className="photo-div ">
            <img src={dgPhoto} className="img-fluid " alt="..." />
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" col-md-8 col-sm-12 mt-3 welcome "
        >
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            The commitment and determination of the Governor to move the state
            out of economic stagnation to a commercial hub of the nation, was
            demonstrated through the establishment of the Plateau State
            Microfinance Development Agency.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-left"
          >
            Established in 2016 by His Excellency the Executive Governor of
            Plateau state . The Agency is strategically positioned, to assist in
            the human capital development need of the existing and would be
            Micro, Small and Medium Enterprises (MSME’s) operators, provide
            linkage services in terms of access to finance, market information,
            quality control services to the MSME’s, source, initiate and
            coordinate bilateral or multilateral technical assistance or
            partnership programs with local and international organizations and
            foundations.
          </p>
        </div>
      </div>

      <div className="row about-row">
        <div className="col-md-4 welcome">
          <h4
            className="text-center"
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Our Mission
          </h4>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center"
          >
            To develop the capacity of Micro Small and Medium Enterprises in the
            State towards wealth creation, and poverty reduction.
          </p>
        </div>
        <div className="col-md-4 welcome ">
          <h4
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center"
          >
            Our Vision
          </h4>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center"
          >
            To be a world class Agency that is passionate and efficient in the
            promotion and development of Micro Small and Medium Enterprises.
          </p>
        </div>
        <div className="col-md-4 welcome ">
          <h4
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center"
          >
            Core Values
          </h4>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center"
          >
            Team work, Resourcefulness, Integrity, Passion, (T R I P)
          </p>
        </div>
      </div>

      <h5
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-center view-more"
      >
        <Link to="about"> More {">>"} </Link>{" "}
      </h5>
    </div>
  );
};

export default AboutMain;
