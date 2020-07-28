import React from "react";
import "../Hobbies.scss";
import FieldOfDreams from "../../images/FieldOfDreams.jpeg";

function Baseball() {
  return (
    <div className="sport-container" id="baseball">
      <span className="emoji">⚾</span>

      <ul>
        <li>"Field of Dreams"</li>
        <li> "Pride of the Yankees"</li>
        <li> "Bull Durham"</li>
        <li> "The Sandlot"</li>
        <li> "The Natural"</li>
      </ul>
      <div className="img-wrapper">
        <img src={FieldOfDreams} className="rafiki-img" alt="Field Of Dreams" />
        <p className="img-caption">"If you build it, he will come."</p>
      </div>
    </div>
  );
}

export default Baseball;
