import React from "react";
import "./SocialStudies.scss";

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
          <div className="box">
            <h2 className="box-header">Current Topic</h2>
            <img
              className="box-img"
              src="https://img.icons8.com/dusk/64/000000/classroom.png"
            />
          </div>
          {/* Projects */}
          <div className="box">
            {" "}
            <h2 className="box-header">Projects</h2>
            <img
              className="box-img"
              // src="https://img.icons8.com/dusk/64/000000/group-of-projects.png"
              src="https://img.icons8.com/dusk/64/000000/paper-plane.png"
            />
            {/* <img src="https://img.icons8.com/color/48/000000/project-management.png" />{" "} */}
          </div>
          {/* Key Vocab Terms */}
          <div className="box">
            {" "}
            <h2 className="box-header">Vocabulary Terms</h2>
            <img
              className="box-img"
              src="https://img.icons8.com/cotton/64/000000/marker-pen.png"
            />{" "}
          </div>
        </div>
        <div className="row">
          {/* Assignments */}
          <div className="box">
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
          {/* Upcoming Assessments */}
          <div className="box">
            <h2 className="box-header">Assessments</h2>
            <img
              className="box-img"
              src="https://img.icons8.com/dusk/64/000000/exam.png"
            />{" "}
          </div>
          {/* I.X.L. */}
          <div className="box">
            {" "}
            <h2 className="box-header">I.X.L.</h2>
            <img
              className="box-img"
              src="https://img.icons8.com/dusk/64/000000/e-learning.png"
            />{" "}
          </div>
        </div>
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
