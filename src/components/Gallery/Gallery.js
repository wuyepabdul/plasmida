import React, { useEffect } from "react";
import impact_story from "../../video/story.mp4";
import "./Gallery.css";
import { imagesData } from "../ImagesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

const Gallery = () => {
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
    <div className="gallery-container">
      <MetaTags>
        <title>Gallery</title>
        <meta name="description" content="Our Story in Pictures" />
        <meta property="og:title" content="Gallery" />
        <meta property="og:image" content={photo} />
      </MetaTags>
      <h2
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className=" text-center "
      >
        Our Impact Story
      </h2>

      <div className="row">
        <div className="video-player"
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
          <div
            
          >
            
          </div>
          <video
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              controls
              loop
              src={impact_story}
            >
              Your browser does not support this video. Use Chrome browser
            </video>
        </div>
      </div>

      <section className="gallery">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-center gallery-title mb-5"
        >
          Stories in Pictures
        </h2>
        <div id="image-gallery">
          <div className="row justify-content-center">
            {imagesData.map((img) => (
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
          {/*           <h5
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className="text-center view-more"
          >
            <Link to="/gallery"> More {">>"} </Link>{" "}
          </h5> */}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
