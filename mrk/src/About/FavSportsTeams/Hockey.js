import React from "react";
import "../Hobbies.scss";
import Capitals from "../../images/Capitals.jpeg";

function Hockey() {
  return (
    <div className="fav-characters-container" id="hockey">
      <div className="disney-content">
        <span className="emoji">🏒</span>

        <ul>
          <li>Washington Capitals</li>
          <li>Phoenix Coyotes</li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img src={Capitals} className="rafiki-img" alt="Washington Capitals" />
      </div>
    </div>
  );
}

export default Hockey;
