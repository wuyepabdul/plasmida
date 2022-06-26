import React from "react";
import "./advert.css";
import logo1 from "./../images/logo.png";
import logo2 from "./../images/worldbank2.jpeg";

const Advert = () => {
  return (
    <div className="advert-container container">
      <div className="advertlogos d-flex justify-content-between">
        <div className="logo ">
          <img src={logo1} alt=".." />
        </div>
        <div className="logo2">
          <img src={logo2} alt=".." />
        </div>
      </div>
      <div className="advert-header">
        <h4 className="text-center">
          <strong>PLATEAU STATE MICROFINANCE DEVELOPMENT AGENCY</strong>
        </h4>
        <p className="text-center">
          Plot 780, Liberty Boulevard, Beside Nigerian Film Corporation, Jos,
          Plateau State
        </p>
        <p className="text-center">
          <strong>Tel:</strong> +234-8069540448, <strong>Email:</strong>{" "}
          plasmida@plateausstate.gov.ng
        </p>
      </div>
      <h1 className="text-center career-title">
        <strong>CAREER OPPORTUNITIES</strong>
      </h1>
      <p>
        Plateau State Microfinance Development Agency wish to invite suitably
        qualified candidates to join our project team in effecting the Nigerian
        COVID-19 Action Recovery and Economic Stimulus (NG-CARES) Program for
        Result (PforR) in Plateau State.
        <br />
        In pursuit of the mandate of Plateau State and World Bank, to expand
        access to livelihood support and food security services, and grants for
        poor and vulnerable households and firms, we are seeking to employ
        suitably qualified persons to fill the following broad areas of our
        activities:
      </p>
      <ul>
        <li>Social Safe Guard Specialist</li>
        <li>Operations Officers (DLI 3.1, DLI 3.2 and DLI 3.3) </li>
        <li>M & E Officer Assistant</li>
        <li>Environment Officer Assistant</li>
        <li>Project Admin Assistant</li>
        <li>GRM Assistant</li>
        <li>Social Gender Assistant</li>
        <li>Drivers</li>
        <li>Cleaners</li>
      </ul>
      <h5>
        <strong>Method of Application</strong>
      </h5>
      <p>
        Interested applicants should submit their CVs to the Admin & Finance
        Department of the Agency. Applicants can also forward their
        applications/CVs to <strong>plasmida@plateausstate.gov.ng</strong>.{" "}
        <br />
        <strong>NOTE:</strong> that only one application should be submitted.
        That is, if an applicant submits his/her application through the Admin &
        Finance Department, he/she should not forward an application to{" "}
        <strong>plasmida@plateausstate.gov.ng</strong> or otherwise. Applicants
        who submit more than ONE application will be disqualified. Only
        shortlisted applicants will be contacted.
      </p>
      <p className="text-center closing-title py-3">
          The closing date for this application is{" "}
          <strong className="date">30th September, 2021 at 12:00 [midnight]</strong>
      </p>
      <h3 className="text-center">SIGNED: MANAGEMENT</h3>{" "}
    </div>
  );
};

export default Advert;
