import React from "react";
import "./Education.scss";

function Education() {
  return (
    <div className="education-container">
      <p>
        Attended Elementary School in Massapequa, New York and Phoenix, Arizona
      </p>
      <p>Promoted from Madison # 1 Middle School in Phoenix, Arizona</p>
      <p>Graduate of Camelback High School and Phoenix College</p>
      <p>Three college degrees:</p>
      <ul>
        <li>Associate's Degree from Phoenix, AZ</li>
        <li>
          Bachelor's Degree from Grand Canyon University - Elementary Education
          with dual minors in History and Behavorial Science
        </li>
        <li>
          {" "}
          Master's Degree from Northern Arizona University - Elementary
          Education
        </li>
      </ul>
    </div>
  );
}

export default Education;
