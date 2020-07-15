import React from "react";
import "./About.scss";
import Hamburger from "../util/Hamburger";

function About() {
  return (
    <div className="about-container">
      <Hamburger />
      <h3 className="subject-header">About Mr. Kunz</h3>
    </div>
  );
}

export default About;
