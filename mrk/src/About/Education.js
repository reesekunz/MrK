import React from "react";
import "./Education.scss";
import GCU from "../images/GCU.png";

function Education() {
  return (
    <div className="education-container" id="education">
      <h1 className="about-sub-header">Education</h1>
      <div className="education-wrapper">
        <div className="left-side">
          <p>
            Attended Elementary School in Massapequa, New York and Phoenix,
            Arizona
          </p>
          <p>Promoted from Madison # 1 Middle School in Phoenix, Arizona</p>
          <p>Graduate of Camelback High School in Phoenix, Arizona</p>
          <p>Three college degrees:</p>
          <ul>
            <li>Associate's Degree from Phoenix College</li>
            <li>
              Bachelor's Degree from Grand Canyon University - Elementary
              Education with dual minors in History and Behavorial Science
            </li>
            <li>
              {" "}
              Master's Degree from Northern Arizona University - Elementary
              Education
            </li>
          </ul>
        </div>
        <div className="education-img-wrapper">
          <img src={GCU} alt="GCU Mascot" className="lopes-up" />
        </div>
      </div>
    </div>
  );
}

export default Education;
