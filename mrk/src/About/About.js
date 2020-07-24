import React from "react";
import "./About.scss";
import { Route } from "react-router-dom";
import DadsHeadshot from "../images/DadsHeadshot.png";
import Hamburger from "../util/Hamburger";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import { IoMdSchool } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import { AiOutlineSmile } from "react-icons/ai";
// import { animateScroll as scroll } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  return (
    <div className="about-container">
      <Hamburger />
      <h3 className="subject-header">About Me</h3>
      <img
        src={DadsHeadshot}
        alt="really just a beautiful headshot of mr kunz"
        className="dads-headshot"
      />

      <nav className="about-links">
        <Link
          to={`/about/education#education`}
          className="about-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Education
          <IoMdSchool size={35} />
        </Link>
        <Link to={`/about/experience#experience`} className="about-link">
          Experience
          <GrWorkshop size={35} color="white" />
        </Link>
        <Link to={`/about/hobbies#hobbies`} className="about-link">
          Hobbies
          <AiOutlineSmile size={35} />
        </Link>
      </nav>

      <Route path="/about/education" component={Education} />
      <Route path="/about/experience" component={Experience} />
      <Route path="/about/hobbies" component={Hobbies} />
    </div>
  );
}

export default About;
