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
      <h3 className="subject-header">About Mr. Kunz</h3>
      <nav className="about-links">
        <Link to={`/about/education`}>Education</Link>
        <Link to={`/about/experience`}>Teaching Experience</Link>
        <Link to={`/about/hobbies`}>Hobbies</Link>
      </nav>

      <Route path="/about/education" component={Education} />
      <Route path="/about/experience" component={Experience} />
      <Route path="/about/hobbies" component={Hobbies} />

      {/* <Route
        path="/avengers/:avengerId/movies"
        render={props => <AvengerMovies {...props} avenger={avenger} />}
      />
      <Route
        path="/avengers/:avengerId/movies"
        render={props => <AvengerMovies {...props} avenger={avenger} />}
      /> */}
    </div>
  );
}

export default About;
