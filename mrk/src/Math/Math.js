import React from "react";
import "./Math.scss";
import Hamburger from "../util/Hamburger";

function MathPage() {
  return (
    <div className="math-container">
      <Hamburger />
      <h3 className="subject-header">Math</h3>
      <div className="quote-wrapper">
        <p className="subject-quote">
          "Do or do not, there is no try." - Yoda{" "}
        </p>
      </div>
    </div>
  );
}

export default MathPage;
