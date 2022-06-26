import React, { useEffect } from "react";
import "./Gallery.css";
import { imagesData1 } from "../ImagesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeGallery = () => {
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
            {/* <img src={img.src} alt="..." />,.
             */}
            <img src={img.src} class="img-responsive img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="gallery mb-5">
        <h1
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="text-center gallery-title"
        >
          <Link to="/gallery">Gallery</Link>
        </h1>
        <div id="image-gallery">
          <div className="row justify-content-center">
            {imagesData1.map((img) => (
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
          <h5
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="text-center view-more"
          >
            <Link to="gallery"> More {">>"} </Link>{" "}
          </h5>
        </div>
      </section>
    </>
  );
};

export default HomeGallery;
