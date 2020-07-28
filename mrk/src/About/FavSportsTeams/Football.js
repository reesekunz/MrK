import React from "react";
import "../Hobbies.scss";
import Steelers from "../../images/Steelers.jpeg";

function Football() {
  return (
    <div className="fav-characters-container" id="football">
      <div className="disney-content">
        <span className="emoji">🏈</span>

        <ul>
          <li>Pittsburgh Steelers</li>
          <li>Arizona Cardinals</li>
          <li>Whomever is playing the Cowboys</li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img src={Steelers} className="rafiki-img" alt="Pittsburgh Steelers" />
      </div>
    </div>
  );
}

export default Football;
