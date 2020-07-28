import React from "react";
import "../Hobbies.scss";
import Capitals from "../../images/Capitals.jpeg";

function Hockey() {
  return (
    <div className="sport-container" id="hockey">
      <span className="emoji">🏒</span>

      <ul>
        <li>Washington Capitals</li>
        <li>Phoenix Coyotes</li>
      </ul>
      <div className="img-wrapper">
        <img src={Capitals} className="rafiki-img" alt="Washington Capitals" />
        <p className="img-caption">
          Washington Capitals - 2018 Stanley Cup Champs!
        </p>
      </div>
    </div>
  );
}

export default Hockey;
