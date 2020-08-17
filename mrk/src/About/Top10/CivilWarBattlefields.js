import React from "react";
import "../Hobbies.scss";
import Gettysburg from "../../images/Gettysburg.jpg";

function CivilWarBattlefields() {
  return (
    <div className="fav-characters-container" id="battlefields">
      <div className="disney-content">
        <h2>U.S. Civil War Battlefields I've Visited:</h2>

        <ul>
          <li>Bull Run, Virginia</li>
          <li>Franklin, Tennessee</li>
          <li>Gettysburg, Pennsylvania</li>
          <li>Parker's Cross Roads, Tennessee</li>
          <li>Shiloh, Mississippi</li>
          <li>Tupelo, Mississippi</li>
          <li>Vicksburg, Mississippi</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img
          src={Gettysburg}
          className="rafiki-img"
          id="sports-team"
          alt="Gettysburg"
        />
      </div>
    </div>
  );
}

export default CivilWarBattlefields;
