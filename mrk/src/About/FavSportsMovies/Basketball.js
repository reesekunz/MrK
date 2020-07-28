import React from "react";
import "../Hobbies.scss";
import Hoosiers from "../../images/Hoosiers.jpeg";

function Basketball() {
  return (
    <div className="sport-container" id="basketball">
      <span className="emoji">🏀</span>
      <ul>
        <li> "Hoosiers"</li>
        <li> "Space Jam"</li>
        <li> "One on One"</li>
        <li> "Finding Forester"</li>
        <li> "Coach Carter"</li>
      </ul>
      <div className="img-wrapper">
        <img src={Hoosiers} className="rafiki-img" alt="Hoosiers" />
        <p className="img-caption">Hoosiers is a classic.</p>
      </div>
    </div>
  );
}

export default Basketball;
