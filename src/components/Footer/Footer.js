import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer className="container-fluid footer px-5 py-3">
      <div className="row">
        <div className="col">
          <h6>Quick Links</h6>
          <ul
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="ul-list mt-3"
          >
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/organogram">Organogram</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/gallery">Gallery</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/programs">Projects</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="col">
          <h6>Follow Us</h6>
          <ul
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="ul-list mt-3"
          >
            <li>
              {" "}
              <Link to="#">
                <i className="fab fa-facebook"></i> Facebook
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="#">
                {" "}
                <i className="fab fa-twitter"></i>Twitter
              </Link>
            </li>
            <li>
              {" "}
              <Link to="#">
                {" "}
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </li>
            <li>
              {" "}
              <Link to="#">
                {" "}
                <i className="fab fa-linkedin"></i> LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h6>Info</h6>
          <ul
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="ul-list mt-3"
          >
            <li>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Plot 780, Liberty
              Boulevard
            </li>
            <li>
              {" "}
              <i className="fas fa-envelope"> </i> plasmida.plagov@gmail.com
            </li>
            <li>
              {" "}
              <i className="fas fa-phone"></i> +2349025800090{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
