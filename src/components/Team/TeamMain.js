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
import { Card } from "antd";
import { imagesData, transitionImages } from "../ImagesData";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

const TeamMain = () => {
  const { Meta } = Card;

  const photos = [
    { id: 1, src: head2, name: "Bomkam Ali Wuyep", title: "Director-General" },
    {
      id: 2,
      src: head7,
      name: "Phillip Samme",
      title: "Director of Monitory & Evaluation",
    },
    { id: 3, src: jeni, name: "Jenifer", title: "Gender Expert" },
    {
      id: 4,
      src: head5,
      name: "Victor Diyal",
      title: "Director of Research & Training",
    },
    {
      id: 9,
      src: head8,
      name: "Karami",
      title: "Director of Partnership & Linkages",
    },

    { id: 5, src: head3, name: "Jackse", title: "Director of Admin" },
    { id: 6, src: head6, name: "Paul", title: "Director of Finance" },
    { id: 7, src: grace, name: "Grace", title: "Ag Head MSME" },
    { id: 8, src: head4, name: "Nansel Daniel", title: "Head of ICT" },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleModal = (img) => (
    //
    <div
      class="modal fade"
      id={"modal" + img.id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img src={img.src} class="img-responsive img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div class="container">
      <MetaTags>
        <title>Our Team</title>
        <meta
          name="description"
          content="Meet our Team"
        />
        <meta property="og:title" content="Our Team" />
        <meta property="og:image" content={photo} />
      </MetaTags>
      <div class="row heading">
        <div class="col-md-12 col-md-offset-3">
          <h2 class="text-center bottom-line team-heading ">Meet our Team</h2>
        </div>
      </div>

      <div class="row team-row">
        {photos.map((img) => (
          <div class="col-md-4 col-sm-6 team-wrap my-4">
            <div class="team-member text-center">
              <div class="team-img">
                <img
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src={img.src}
                  alt=""
                />
                <div class="overlay">
                  <div class="team-details text-center">
                    <p>{img.title}</p>
                  </div>
                </div>
              </div>
              <p
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="mt-2"
              >
                <strong> {img.name}</strong>
              </p>
              <p
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="gallery mb-5">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="text-center gallery-title mb-5"
        >
          TRANSITION TO A NEW LEADERSHIP FOR THE AGENCY{" "}
        </h2>
        <p
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="text-center mb-5"
        >
          This event took place in June 2021, when the Executive Governor, Rt.
          Hon. (Dr) Simon Bako Lalong KSGG announced Bomkam Ali Wuyep as the new
          Director General and Secretary to the Board Plateau State Microfinance
          Development Agency (PLASMIDA)
        </p>
        <div id="image-gallery">
          <div className="row justify-content-center">
            {transitionImages.map((img) => (
              <>
                <div
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal` + img.id}
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image-div"
                >
                  <div
                    className="img-wrapper"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal` + img.id}
                  >
                    <img
                      src={img.src}
                      className="img-responsive img-fluid image"
                      alt="..."
                    />

                    {/* <div class="img-overlay">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                      </div> */}
                  </div>
                </div>

                {handleModal(img)}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="gallery mb-5">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="text-center gallery-title mb-5"
        >
          NEW MANAGEMENT AND STAFF ENGAGEMENT
        </h2>
        <p
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="text-center mb-5"
        >
      The new leadership swung into action immediately by engaging both senior and junior staff alike and this resulted in the initiation and establishment of the Early Morning Session (EMS) that takes place every Tuesday in the office.
        </p>
        <div id="image-gallery">
          <div className="row justify-content-center">
            {transitionImages.map((img) => (
              <>
                <div
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal` + img.id}
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image-div"
                >
                  <div
                    className="img-wrapper"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal` + img.id}
                  >
                    <img
                      src={img.src}
                      className="img-responsive img-fluid image"
                      alt="..."
                    />

                  </div>
                </div>

                {handleModal(img)}
              </>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TeamMain;
