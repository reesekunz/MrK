import React from "react";
import "./Hobbies";

function FavSportsMovies() {
  return (
    <div className="fav-sports-movies-container" id="fav-sports-movies">
      <h2>Favorite Sports Movies:</h2>
      <h3>Baseball ⚾</h3>
      <ul>
        <li>"Field of Dreams"</li>
        <li> "Pride of the Yankees"</li>
        <li> "Bull Durham"</li>
        <li> "The Sandlot"</li>
        <li> "The Natural"</li>
      </ul>
      <h3>Basketball 🏀</h3>
      <ul>
        <li> "Hoosiers"</li>
        <li> "Space Jam"</li>
        <li> "One on One"</li>
        <li> "Finding Forester"</li>
        <li> "Coach Carter"</li>
      </ul>
      <h3>Football 🏈</h3>
      <ul>
        <li> "Remember the Titans"</li>
        <li> "Invincible"</li>
        <li> "Jerry Maguire"</li>
        <li> "The Blind Side"</li>
        <li> "Draft Day"</li>
      </ul>
    </div>
  );
}

export default FavSportsMovies;
