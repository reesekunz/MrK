import React from "react";
import "./SocialStudies.scss";

import Hamburger from "../util/Hamburger";

function SocialStudies() {
  return (
    <div className="events-container">
      <Hamburger />
      Social Studies Page
      <div className="subject-quote">
        "Veni, vidi, vici"
        <div className="quote-by">- Julius Caesar</div>
      </div>
    </div>
  );
}

export default SocialStudies;
