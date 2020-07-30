import React from "react";
import "./Math.scss";
import Hamburger from "../util/Hamburger";

function MathPage() {
  return (
    <div className="math-container">
      <Hamburger />
      <h3 className="subject-header">Math</h3>
      <div className="question">
        {/* Question?&nbsp; */}
        <a className="question-link" href="/contact">
          Contact Mr. Kunz{" "}
        </a>
      </div>
      <div className="quote-wrapper">
        <p className="subject-quote">
          "Do or do not, there is no try." - Yoda{" "}
        </p>
      </div>
      <div className="content-wrapper">
        <div className="half" id="ixl">
          <h2 className="half-header">I.X.L</h2>
          <img
            className="math-img"
            src="https://img.icons8.com/dusk/64/000000/e-learning.png"
          />{" "}
          <div className="row" id="ixl-row">
            <div className="ixl-link">General</div>
            <div className="ixl-link">Individualized</div>
          </div>
        </div>

        <div className="half" id="how-to">
          <h2 className="half-header">How-To Videos</h2>
          <img
            className="math-img"
            src="https://img.icons8.com/dusk/64/000000/video.png"
          />
          <div className="link-wrapper">
            <div className="row">
              <div className="video-link">Fractions</div>
              <div className="video-link">Decimals</div>
            </div>
            <div className="row">
              <div className="video-link">Multiplication</div>
              <div className="video-link">Divison</div>
            </div>
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

export default MathPage;
