import React from "react";
import "../Hobbies.scss";
import RememberTheTitans from "../../images/RememberTheTitans.jpeg";

function Football() {
  return (
    <div className="sport-container" id="football">
      <span className="emoji">🏈</span>

      <ul>
        <li> "Remember the Titans"</li>
        <li> "Invincible"</li>
        <li> "Jerry Maguire"</li>
        <li> "The Blind Side"</li>
        <li> "Draft Day"</li>
      </ul>
      <div className="img-wrapper">
        <img src={RememberTheTitans} className="rafiki-img" alt="Hoosiers" />
        <p className="img-caption">"Attitude reflects leadership, captain."</p>
      </div>
    </div>
  );
}

export default Football;
