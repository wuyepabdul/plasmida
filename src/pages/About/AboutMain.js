import React, { useEffect } from "react";
import dgPhoto from "../../images/dg.jpg";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MetaTags from "react-meta-tags";
import photo from "../../images/plasmida-logo.png";

const AboutMain = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const madateList = [
    {
      id: 1,
      details:
        "Developing,  facilitating and promoting programs, instruments and support services that are geared towards  enhancing MSME operations in Plateau State",
    },
    {
      id: 2,
      details:
        "Stimulating, monitoring and coordinating the development of the MSMEs sub-sector in Plateau State",
    },
    {
      id: 3,
      details:
        "Initiating and articulating policy ideas for small and medium enterprises growth and development for Plateau State",
    },
    {
      id: 4,
      details:
        "Serving as vanguard for rural industrialization, poverty reduction, job creation and enhanced livelihoods for Plateau households and MSMEs",
    },
    {
      id: 5,
      details:
        "Linking MSMEs to internal and external sources of finance, appropriate technology, technical skills as well as to large enterprises",
    },
    {
      id: 6,
      details:
        "Promoting and providing access to industrial infrastructures such as layouts, incubators, industrial parks",
    },
    {
      id: 7,
      details:
        "Intermediating between MSMEs and Government of Plateau State and the National Government [PLASMIDA] is the voice of the MSMEs",
    },
    {
      id: 8,
      details:
        "Working in partnership with other institutions in both public and private sector to create a good enabling environment of business in general, and MSME activities in particular within Plateau State.",
    },
  ];

  const values = [
    {
      id: 1,
      title: "Our Mission",
      details:
        "To develop the capacity of Micro Small and Medium Enterprises in the State towards wealth creation, and poverty reduction.",
    },
    {
      id: 2,
      title: " Our Vision",
      details:
        " To be a world class Agency that is passionate and efficient in the    promotion and development of Micro Small and Medium Enterprises.",
    },
    {
      id: 3,
      title: "Core Values",
      details: "Team work, Resourcefulness, Integrity, Passion, (T R I P)",
    },
    {
      id: 4,
      title: "Product and Services",
      details: " Coaching, Mentoring, Training, Linkages, Consultancy",
    },
  ];
  return (
    <div className="mb-5" id="about">
      <MetaTags>
        <title>About Us </title>
        <meta
          name="description"
          content="The Agency is strategically positioned, to assist in the human
          capital development need of the existing and would be Micro, Small
          and Medium Enterprises (MSME’s) operators, provide linkage services
          in terms of access to finance, market information, quality control
          services to the MSME’s, source, initiate and coordinate bilateral or
          multilateral technical assistance or partnership programmes with
          local and international organizations and foundations."
        />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content={photo} />
      </MetaTags>
      <div className="row py-5 about-row mb-3">
        <h1
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="px-5 mb-3 title"
        >
          About Us
        </h1>

        <div
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="col-md-6 "
        >
          <div className="photo-div p-3">
            <img src={dgPhoto} className="img-fluid " alt="..." />
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="col-md-6 mt-3 welcome"
        >
          <h3 className="text-center mb-3">Welcome to PLASMIDA</h3>
          <p className="text-center">
            The commitment and determination of the Governor to move the state
            out of economic stagnation to a commercial hub of the nation, was
            demonstrated through the establishment of the Plateau State
            Microfinance Development Agency.
          </p>
          <p className="text-center">
            The Agency is strategically positioned, to assist in the human
            capital development need of the existing and would be Micro, Small
            and Medium Enterprises (MSME’s) operators, provide linkage services
            in terms of access to finance, market information, quality control
            services to the MSME’s, source, initiate and coordinate bilateral or
            multilateral technical assistance or partnership programmes with
            local and international organizations and foundations.
          </p>
        </div>
      </div>

      <div className="row about-row">
        {values.map((value) => (
          <div key={value.id} className="col-md-6 welcome mt-3">
            <h4
              className="text-center"
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {value.title}
            </h4>
            <p
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="text-center"
            >
              {" "}
              {value.details}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className="container">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-center mt-3 py-4"
        >
          {" "}
          Our Mandate
        </h2>
        <ul class="mandate ">
          {madateList.map((mandate) => (
            <li
              key={mandate.id}
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {" "}
              {mandate.details}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMain;
