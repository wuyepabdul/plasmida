import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="contact-container">
      <MetaTags>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Find out more about us"
        />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:image" content={photo} />
      </MetaTags>
      <h1
        className="text-center mb-5 pt-5 contact-title"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        Contact Us
      </h1>
      <div className="contact-section bg-inf">
        <div className="contact-info">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <i className="fas fa-map-marker-alt"></i>
            <strong> Plot 780, Liberty Boulevard</strong>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <i className="fas fa-envelope"></i>
            <strong> plasmida.plagov@gmail.com</strong>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <i className="fas fa-phone"></i> <strong> +234....</strong>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <i className="fas fa-clock"></i>{" "}
            <strong> Mon - Fri 8:00 AM to 5:00 PM</strong>{" "}
          </div>
        </div>
        <div className="contact-form ">
          <form
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className="contact"
            // action=""
            // method="post"
          >
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="inputs "
            >
              <input
                type="text"
                name="name"
                className="text-box"
                placeholder="Your Name"
                required
              />
              <input
                type="text"
                name="name"
                className="text-box "
                placeholder="Your email"
                required
              />
            </div>
            <div
              className="text-area"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <textarea
                type="text"
                name="name"
                className="text-box text-area"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" name="submit" className="send-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
