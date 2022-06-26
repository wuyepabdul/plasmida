import React, { useEffect } from "react";
import photo from "../../images/dg-award1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./blog.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div class="container mb-4">
      <div className="row">
        <h2
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="blog-title text-center"
        >
          {" "}
          Review Workshop on Recommendations from 2021 BEE Dialogue{" "}
        </h2>
        {/* <div className="col-md-4 col-sm-12">
          <img src={photo} class="img-fluid rounded-start" alt="..." />
        </div> */}
        <div className="col-md-12 col-sm-12">
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            The Director General PLASMIDA/Coordinator Result Area 3 for CARES*
            Mr. Bomkam Ali Wuyep was at the Review Workshop on Recommendations
            from 2021 BEE Dialogue which was jointly organised by the Plateau
            State Micro Finance Development Agency (PLASMIDA) and Plateau
            Investment and Property Development Company Limited (PIPC) in
            collaboration with PROGRAMMES, MONITORING AND RESULTS DELIVERY
            OFFICE.and supported by the GIZ SEDIN held on the 23rd June, 2022 at
            the Nasco Hall, Jos Business School.
          </p>

          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            The Review programme is done to assess the level of implementation
            or measure the progress made as regards the promises made to the
            Plateau Business Community by the Government as it relates to
            providing an enabling environment for businesses on the Plateau.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            In his opening remarks, the Technical Advisor of the PMRDO welcomed
            the Business Community to the engagement while informing them that
            relevant Government MDAs were there to presebnt their progress
            reports with regards to Access to Finance, Access to Markets,
            Infrastructure, Security, Agricultural policies and programmes, Tax
            issues, as well as Gender issues which were issues raised by the
            business community. He however, apologized for the absence of the
            Commissioners who were absent because they had to attend an
            emergency EXCO meeting.
          </p>

          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Presentations were made by the various representatives of MDAs to
            the Business Community and session of questions was allowed and
            responses and more clarifications were given, The Director General
            of PLASMIDA Mr Bomkam Ali Wuyep in his presentation highlighted on
            what the Agency was doing as a support for MSMEs on the Plateau.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            He stated that the Business Community was a critical partner in
            progress as they provide over 70% of employment in Plateau and the
            major contributors of Revenue for the State and as such Government
            is doing everything to ensure that they thrive. He added that the
            Executive Governor, Rt. Hon . Dr. Simon Bako Lalong set up the
            Agency to institutionalize the fight against poverty and to also
            provide a platform for MSMEs to explore and take advantage of.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            On the issues of Access of Finance, he informed participants that
            the Agency had concluded with two Commercial Banks to provide micro
            and soft loans to women. At the moment, members of Market women
            association have started benefiting. Also, loans were negotiated at
            single digit interest rate for Medium and Small businesses wholly
            owned by women.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            For the Access to Markets, a selected MSME number of MSMEs were
            given digital skills training. This is to enable them leverage on
            technology to expand their markets. Plans have been concluded for a
            larger training of additional MSMEs on the digital skills training,
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            The Director General also told the Community that financial literacy
            training has been concluded and People Living with Disabilities as
            well as Displaced persons were selected to benefit from it. The
            selection of the participants was done in conjunction with the
            Disability Rights Commission, SEMA as well as reputable Non
            Governmental Organizations. The training is going to last for Six
            months.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            He reminded participants of the already approved MSME Development
            Fund by His Excellency and talks are ongoing to get Investors to
            fund and manage, This will afford the MSMEs access to cheaper funds
            for their Business. He added that the MSME policy for the State will
            be ready by the end of the third quarter. A Consultant was already
            engaged for the purpose.
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            In response to a question earlier asked on PLCARES, he emphasized
            the fact that the Governor was really concerned about the plight of
            MSMEs even as it relates to the negative consequences which has led
            him to lend his strong support the Program. He informed them that
            the CARES was a Program for Results therefore intended beneficiaries
            must fulfill the minimum eligibility criteria. The program is for
            both formal and informal businesses and restricted to MSEs. The
            areas of intervention includes the Easing Financing Constraints
            where 40% of the total loan Principal shall be refunded, for
            Operational Grants which covers payroll, rent, utilities and solar
            panels and the last is the Enhancing of the IT capabilities of MSEs
            where laptops and android phones will be given.
          </p>

          <p
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            The Director General ended his remark by appreciating the Executive
            Governor of Plateau State Rt. Hon Dr. Simon Bako Lalong for his
            untiring support to the Business Community and for establishing new
            and strong institutions like PLASMIDA, PMRDO, OSIC, PPBA, PPP
            Agency, etc as well as appointing the right people in already
            existing institutions like the PSIRS, JMDB, Min of Commerce, Min of
            Lands and Survey, MIn of Agriculture, to improve the environment for
            businesses to thrive. He appreciated the Management and Staff of GIZ
            headed by Hauwa Mankilik for the strong support given to MDAs on the
            Plateau especially PLASMIDA and to the Business Community. He also
            appreciated the Business community for their time and valuable
            feedback each time they are called upon to do which has shapened
            some policies and decisions of Government. He described them as
            valuable and critical partners in progress and reminded them that
            though we have not reached the goal, but we are certainly not where
            we started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
