import React from "react";
import "../Hobbies.scss";
import Andersonville from "../../images/Andersonville.jpeg";

function CivilWarSites() {
  return (
    <div className="fav-characters-container" id="sites">
      <div className="disney-content">
        <h2>U.S. Civil War Related Sites I've Visited:</h2>

        <ul>
          <li>Andersonville Prison, Georgia</li>
          <li>U.S. Civil War Naval Museum, Georgia</li>
          <li>Lincoln Memorial, Washington, DC</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img
          src={Andersonville}
          className="rafiki-img"
          id="sports-team"
          alt="Andersonville"
        />
      </div>
    </div>
  );
}

export default CivilWarSites;
