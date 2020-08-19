import React from "react";
import "./Math.scss";
import { Route, Link } from "react-router-dom";
import Hamburger from "../util/Hamburger";

function MathNew() {
  return (
    <div className="social-studies-container">
      <Hamburger />
      <h3 className="subject-header">Math</h3>
      <div className="quote-wrapper">
        <p className="math-quote">"Do or do not. There is no try." - Yoda </p>
      </div>
      <div className="subject-content">
        <p className="intro-message">
          Welcome to 7th Grade Math. If you have any questions,{" "}
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
            </div>
          </a>
          {/* Math Classroom */}
          <a href="https://classroom.google.com" className="box">
            <div>
              {" "}
              <h2 className="box-header">Math Classroom</h2>
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
export default MathNew;
