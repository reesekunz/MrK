import React from "react";
import "./Hobbies";
import NationalTreasure from "../images/NationalTreasure.jpeg";

function FavNonAnimatedMovies() {
  return (
    <div className="fav-characters-container" id="fav-non-animated-movies">
      <div className="disney-content">
        <h2>Favorite Non-Animated Disney Movies:</h2>
        <ul>
          <li> "The Parent Trap" (The Original, with Haley Mills)</li>
          <li> "The Love Bug"</li>
          <li> "Mary Poppins"</li>
          <li> "The World's Greatest Athlete"</li>
          <li>"The Mighty Ducks"</li>
          <li> "Remember the Titans"</li>
          <li> "The Rookie"</li>
          <li> "National Treasure"</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img
          src={NationalTreasure}
          className="rafiki-img"
          alt="National Treasure"
        />
      </div>
    </div>
  );
}

export default FavNonAnimatedMovies;
