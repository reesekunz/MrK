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
        </div>
        <div className="half" id="how-to">
          <h2 className="half-header">How-To Videos</h2>
        </div>
      </div>
    </div>
  );
}

export default MathPage;
