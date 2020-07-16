import React from "react";
import "./SocialStudies.scss";
import StickyNotes from "./StickyNotes";

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
      <StickyNotes />
    </div>
  );
}

export default SocialStudies;
