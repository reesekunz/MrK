import React from "react";
import "./About.scss";
import { Route, Link } from "react-router-dom";

import Hamburger from "../util/Hamburger";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about-container">
      <Hamburger />
      <h3 className="subject-header">About</h3>
      <nav className="about-links">
        <Link to={`/about/education`} className="about-link">
          Education
        </Link>
        <Link to={`/about/experience`} className="about-link">
          Experience
        </Link>
        <Link to={`/about/hobbies`} className="about-link">
          Hobbies
        </Link>
      </nav>

      <Route path="/about/education" component={Education} />
      <Route path="/about/experience" component={Experience} />
      <Route path="/about/hobbies" component={Hobbies} />
    </div>
  );
}

export default About;
