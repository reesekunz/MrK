import React from "react";
import "./SocialStudiesNew.scss";
import { Route, Link } from "react-router-dom";
import Hamburger from "../util/Hamburger";

function SocialStudies() {
  return (
    <div className="social-studies-container">
      <Hamburger />
      <h3 className="subject-header">Social Studies</h3>
      <div className="quote-wrapper">
        <p className="social-studies-quote">
          "Veni, vidi, vici." - Julius Caesar{" "}
        </p>
      </div>
      <div className="subject-content">
        <p className="intro-message">
          Welcome to 7th Grade Social Studies. This class is an overview as
          we'll be traveling back in time (600 BC - the 19th Century) across
          Asia, Africa, Europe and South America learning about different
          customs, religions, historical figures and key terms. If you have any
          questions,{" "}
          <a href="/contact" className="contact-link">
            Contact Mr. Kunz.
          </a>
        </p>
        <div className="row">
          {/* Vocab */}
          <Link to={`/vocabulary`} className="box">
            <div>
              {" "}
              <h2 className="box-header">Key Vocabulary Terms</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/cotton/64/000000/marker-pen.png"
              />{" "}
            </div>
          </Link>
          {/* IXL */}
          <a href="https://www.ixl.com/" className="box">
            <div>
              {" "}
              <h2 className="box-header">I.X.L.</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/dusk/64/000000/e-learning.png"
              />{" "}
              <div className="sub-links">
                <div className="sub-link">
                  <a href="https://www.ixl.com/">Website</a>
                </div>
                <div className="sub-link">
                  <Link to={`/ixl-directions-social-studies`}>Directions</Link>
                </div>
              </div>
            </div>
          </a>
          {/* Social Studies Classroom */}
          <a href="https://classroom.google.com" className="box">
            <div>
              {" "}
              <h2 className="box-header">Social Studies Classroom</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/color/64/000000/google-classroom.png"
              />
            </div>
          </a>
          {/* Zoom */}
          <a
            href="https://zoom.us/j/92949976715?pwd=bk1yQUdQT044bkY1MS9MNFlwSnlMdz09"
            className="box"
          >
            {" "}
            <div>
              {" "}
              <h2 className="box-header">Zoom</h2>
              <img
                className="box-img"
                src="https://img.icons8.com/fluent/64/000000/zoom.png"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default SocialStudies;
