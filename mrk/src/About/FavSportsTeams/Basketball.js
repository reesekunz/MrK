import React from "react";
import "../Hobbies.scss";
import Suns from "../../images/Suns.jpeg";

function Basketball() {
  return (
    <div className="sport-container" id="basketball">
      <span className="emoji">🏀</span>

      <ul>
        <li>Phoenix Suns</li>
        <li>San Antonio Spurs </li>
      </ul>
      <div className="img-wrapper">
        <img src={Suns} className="rafiki-img" alt="Suns" />
        <p className="img-caption">Picture by ClutchPoints</p>
      </div>
    </div>
  );
}

export default Basketball;
