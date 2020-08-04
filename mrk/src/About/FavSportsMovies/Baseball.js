import React from "react";
import "../Hobbies.scss";
import FieldOfDreams from "../../images/FieldOfDreams.jpeg";

function Baseball() {
  return (
    <div className="fav-characters-container" id="baseball">
      <div className="disney-content">
        <span className="emoji" id="sport-emoji">
          ⚾
        </span>

        <ul>
          <li>"Field of Dreams"</li>
          <li> "Pride of the Yankees"</li>
          <li> "Bull Durham"</li>
          <li> "The Sandlot"</li>
          <li> "The Natural"</li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img src={FieldOfDreams} className="rafiki-img" alt="Field Of Dreams" />
      </div>
    </div>
  );
}

export default Baseball;
