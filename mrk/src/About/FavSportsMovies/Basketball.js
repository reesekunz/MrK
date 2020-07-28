import React from "react";
import "../Hobbies.scss";
import Hoosiers from "../../images/Hoosiers.jpeg";

function Basketball() {
  return (
    <div className="fav-characters-container" id="basketball">
      <div className="disney-content">
        <span className="emoji">🏀</span>
        <ul>
          <li> "Hoosiers"</li>
          <li> "Space Jam"</li>
          <li> "One on One"</li>
          <li> "Finding Forester"</li>
          <li> "Coach Carter"</li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img src={Hoosiers} className="rafiki-img" alt="Hoosiers" />
      </div>
    </div>
  );
}

export default Basketball;
