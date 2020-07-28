import React from "react";
import Rafiki from "../images/Rafiki.jpg";

import "./Hobbies";

function FavCharacters() {
  return (
    <div className="fav-characters-container" id="fav-characters">
      <div className="disney-content">
        <h2>Favorite Characters:</h2>
        <ul>
          <li>Goofy</li>
          <li>Buzz Lightyear</li>
          <li>Olaf</li>
          <li>Rafiki</li>
          <li>Jiminy Cricket</li>
          <li>Forky</li>
          <li> Chip (Of Chip and Dale, not from Beauty and the Beast....)</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img src={Rafiki} className="rafiki-img" alt="Rafiki!!" />
      </div>
    </div>
  );
}

export default FavCharacters;
