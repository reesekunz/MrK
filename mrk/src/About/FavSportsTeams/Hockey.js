import React from "react";
import "../Hobbies.scss";
import Yotes from "../../images/Yotes.png";

function Hockey() {
  return (
    <div className="fav-characters-container" id="hockey">
      <div className="disney-content">
        <span className="emoji">🏒</span>

        <ul>
          <li>Washington Capitals</li>
          <li>Arizona Coyotes</li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img
          src={Yotes}
          className="rafiki-img"
          alt="Arizona Coyotes logo"
          id="sports-team"
        />
      </div>
    </div>
  );
}

export default Hockey;
