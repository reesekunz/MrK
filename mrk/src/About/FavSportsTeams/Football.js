import React from "react";
import "../Hobbies.scss";
import Steelers from "../../images/Steelers.jpeg";

function Football() {
  return (
    <div className="sport-container" id="football">
      <span className="emoji">🏈</span>

      <ul>
        <li>Pittsburgh Steelers</li>
        <li>Arizona Cardinals</li>
        <li>Whomever is playing the Cowboys</li>
      </ul>
      <div className="img-wrapper">
        <img src={Steelers} className="rafiki-img" alt="Pittsburgh Steelers" />
        <p className="img-caption">
          Steelers fans waving their Terrible Towels
        </p>
      </div>
    </div>
  );
}

export default Football;
