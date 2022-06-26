import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Program.css";
import { programData1 } from "../../data/programData";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

const Programs = () => {
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
    <div className="programs-container">
      <MetaTags>
        <title>Programs</title>
        <meta name="description" content="Our Programs" />
        <meta property="og:title" content="Program" />
        <meta property="og:image" content={photo} />
      </MetaTags>

      {programData1.map((program) => (
        <div key={program.id} className="programs mb-4">
          <div>
            <h2
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="text-center  mb-2 py-4"
            >
              {program.title}
            </h2>
            <p
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {program.description}
            </p>
            {program.description2.length > 0 && (
              <p
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                {" "}
                {program.description2}{" "}
              </p>
            )}
          </div>

          <section className="gallery">
            <h4
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text-center program-title"
            >
              Story in pictures
            </h4>
            <div id="image-gallery">
              <div className="row justify-content-center programs-div">
                {program.photos.map((img) => (
                  <>
                    <div
                      key={img.id}
                      data-aos="zoom-in-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal` + img.id}
                      className="col-lg-3 col-md-6 col-sm-6 col-xs-12 image-div "
                    >
                      <div
                        className="img-wrapper"
                        data-bs-toggle="modal"
                        data-bs-target={`#modal` + img.id}
                      >
                        <img
                          src={img.src}
                          className="img-fluid image"
                          alt="..."
                        />
                      </div>
                    </div>

                    {handleModal(img)}
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Programs;
