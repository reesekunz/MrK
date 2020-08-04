import React from "react";
import "../Hobbies.scss";
import Suns from "../../images/Suns.png";

function Basketball() {
  return (
    <div className="fav-characters-container" id="basketball">
      <div className="disney-content">
        <span className="emoji">🏀</span>

        <ul>
          <li>Phoenix Suns</li>
          <li>San Antonio Spurs </li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img src={Suns} className="rafiki-img" id="sports-team" alt="Suns" />
      </div>
    </div>
  );
}

export default Basketball;
