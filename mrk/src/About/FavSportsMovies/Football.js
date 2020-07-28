import React from "react";
import "../Hobbies.scss";
import RememberTheTitans from "../../images/RememberTheTitans.jpeg";

function Football() {
  return (
    <div className="fav-characters-container" id="football">
      <div className="disney-content">
        <span className="emoji">🏈</span>

        <ul>
          <li> "Remember the Titans"</li>
          <li> "Invincible"</li>
          <li> "Jerry Maguire"</li>
          <li> "The Blind Side"</li>
          <li> "Draft Day"</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img src={RememberTheTitans} className="rafiki-img" alt="Hoosiers" />
      </div>
    </div>
  );
}

export default Football;
