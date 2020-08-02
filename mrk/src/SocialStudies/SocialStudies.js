import React from "react";
import "./SocialStudies.scss";
import { Route, Link } from "react-router-dom";
import Hamburger from "../util/Hamburger";

function SocialStudies() {
  return (
    <div className="social-studies-container">
      <Hamburger />
      <h3 className="subject-header">Social Studies</h3>
      <div className="question">
        {/* Question?&nbsp; */}
        <a className="question-link" href="/contact">
          Contact Mr. Kunz{" "}
        </a>
      </div>
      <div className="quote-wrapper">
        <p className="social-studies-quote">
          "Veni, vidi, vici." - Julius Caesar{" "}
        </p>
      </div>
      <div className="content-wrapper">
        <div className="row">
          {/* Current Topic */}

          {/* <IoMdSchool size={35} /> */}
          <Link to={`/current-topic`} className="box">
            <div>
              <h2 className="box-header">Current Topic</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/dusk/64/000000/classroom.png"
              />
            </div>
          </Link>
          {/* Projects */}
          <Link to={`/projects`} className="box">
            <div>
              {" "}
              <h2 className="box-header">Projects</h2>
              <img
                className="box-img"
                // src="https://img.icons8.com/dusk/64/000000/group-of-projects.png"
                src="https://img.icons8.com/dusk/64/000000/paper-plane.png"
              />
              {/* <img src="https://img.icons8.com/color/48/000000/project-management.png" />{" "} */}
            </div>
          </Link>

          {/* Key Vocab Terms */}
          <Link to={`/vocabulary`} className="box">
            <div>
              {" "}
              <h2 className="box-header">Vocabulary Terms</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/cotton/64/000000/marker-pen.png"
              />{" "}
            </div>
          </Link>
        </div>
        <div className="row">
          {/* Assignments */}
          <Link to={`/assignments`} className="box">
            <div>
              {" "}
              <h2 className="box-header">Assignments</h2>
              <img
                className="box-img"
                // src="https://img.icons8.com/clouds/100/000000/school.png"
                src="https://img.icons8.com/bubbles/100/000000/school.png"
                src="https://img.icons8.com/plasticine/100/000000/school.png"
                src="https://img.icons8.com/doodle/48/000000/books.png"
              />
            </div>
          </Link>

          {/* Upcoming Assessments */}
          <Link to={`/assessments`} className="box">
            <div>
              <h2 className="box-header">Assessments</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/dusk/64/000000/exam.png"
              />{" "}
            </div>
          </Link>

          {/* I.X.L. */}
          <Link to={`/ixl`} className="box">
            <div>
              {" "}
              <h2 className="box-header">I.X.L.</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/dusk/64/000000/e-learning.png"
              />{" "}
            </div>
          </Link>
        </div>
      </div>
      <div className="mobile-contact-wrapper">
        Question? &nbsp;
        <a href="/contact" className="mobile-contact-link">
          Contact Mr. Kunz
        </a>
      </div>

      <div className="icon-credit">
        Icons by: &nbsp;
        <a
          href="https://icons8.com"
          target="_blank"
          className="icon-credt-link"
        >
          {" "}
          Icons8
        </a>
      </div>
    </div>
  );
}

export default SocialStudies;
