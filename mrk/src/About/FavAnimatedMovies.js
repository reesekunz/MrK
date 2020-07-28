import React from "react";
import "./Hobbies";
import ToyStory from "../images/ToyStory.jpeg";

function FavAnimatedMovies() {
  return (
    <div className="fav-characters-container" id="fav-animated-movies">
      <div className="disney-content">
        <h2>Favorite Animated Disney Movies:</h2>
        <p className="explanation">
          (For this list, I've decided to include Pixar movies)
        </p>
        <ul>
          <li> "Toy Story"</li>
          <li> "Fox and the Hound"</li>
          <li> "Big Hero 6"</li>
          <li> "Monster's Inc."</li>
          <li>"The Goofy Movie"</li>
          <li> "Hercules"</li>
          <li> "Mulan"</li>
          <li> "Cars"</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img src={ToyStory} className="rafiki-img" alt="Toy Story" />
      </div>
    </div>
  );
}

export default FavAnimatedMovies;
