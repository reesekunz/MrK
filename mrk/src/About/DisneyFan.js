import React from "react";
import "./Hobbies.scss";
import Rafiki from "../images/Rafiki.jpg";

function DisneyFan() {
  return (
    <div className="hobby-section" id="disney-fan">
      <h1 className="sub-header">Disney Fan</h1>
      <p>
        I've been to Disneyland about 200 times. Also got to visit Disney World
        many times while working in Florida. In fact, in April 2019, I visited
        all for Disney World Parks (Magic Kingdom, EPCOT, Disney Studios, and
        Animal Kingdom) in one day!
      </p>
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
      <div className="img-wrapper">
        <img src={Rafiki} className="rafiki-img" alt="Rafiki!!" />
        <p className="img-caption">Rafiki!!</p>
      </div>
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
      <h2>Favorite Attractions (rides) at the Disney Parks:</h2>
      <ul>
        <li> Soarin' (California Adventure and EPCOT)</li>
        <li> Haunted Mansion (Disneyland and Magic Kingdom)</li>
        <li> Kilmanjaro Safaris (Animal Kingdom)</li>
        <li> Pandora--The World of Avatar (Animal Kingdom)</li>
        <li>
          Toy Story Midway Mania (California Adventure and Disney Studios)
        </li>
      </ul>
      <p>
        I haven't been to Star Wars Galaxy Edge, yet.... I also haven't been
        able to ride Slinky Dog Dash, yet......
      </p>
    </div>
  );
}

export default DisneyFan;
