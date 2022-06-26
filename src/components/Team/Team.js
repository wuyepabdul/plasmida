import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import head2 from "../../images/head2.jpg";
import head3 from "../../images/head3.jpg";
import head4 from "../../images/head4.jpg";
import head5 from "../../images/head5.jpg";
import head6 from "../../images/head6.jpg";
import head7 from "../../images/head7.jpg";
import head8 from "../../images/head8.jpg";
import grace from "../../images/grace.png";
import jeni from "../../images/jeni.png";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Team = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="team">
      <Link to="departments">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-center"
        >
          <font>Meet Our Team</font>
        </h2>
      </Link>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="2000"
        className="carousel-container "
      >
        <div className="my-carousel">
          <div className="my-carousel-content">
            <div className="my-carousel-item">
              <img src={head2} alt="pic" />
              <h3 className="text-center">Director General</h3>
            </div>
            <div className="my-carousel-item">
              <img src={head3} alt="pic" />
              <h3 className="text-center">Director of Administration</h3>
            </div>
            <div className="my-carousel-item">
              <img src={jeni} alt="pic" />
              <h3 className="text-center">Gender Expect</h3>
            </div>

            <div className="my-carousel-item">
              <img src={head4} alt="pic" />
              <h3 className="text-center">Head of ICT</h3>
            </div>
            <div className="my-carousel-item">
              <img src={head5} alt="pic" />
              <h3 className="text-center">Director of Research & Training</h3>
            </div>
            <div className="my-carousel-item">
              <img src={head6} alt="pic" />
              <h3 className="text-center">Director of Finance</h3>
            </div>
            <div className="my-carousel-item">
              <img src={grace} alt="pic" />
              <h3 className="text-center">Ag Head MSME</h3>
            </div>
            <div className="my-carousel-item">
              <img src={head7} alt="pic" />
              <h3 className="text-center">Director Monitory and Evaluation</h3>
            </div>
            <div className="my-carousel-item">
              <img src={head8} alt="pic" />
              <h3 className="text-center">
                Director of Partnership and Linkages
              </h3>
            </div>
          </div>
        </div>
      </div>

      <h5
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
        className="text-center view-more"
      >
        <Link to="team"> More {">>"} </Link>{" "}
      </h5>
    </div>
  );
};

export default Team;
