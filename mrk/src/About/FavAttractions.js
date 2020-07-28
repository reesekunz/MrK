import React from "react";
import "./Hobbies";
import HauntedMansion from "../images/HauntedMansion.jpeg";

function FavAttractions() {
  return (
    <div className="fav-characters-container" id="fav-attractions">
      <div className="disney-content">
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
      <div className="img-wrapper">
        <img
          src={HauntedMansion}
          className="rafiki-img"
          alt="Haunted Mansion"
        />
      </div>
    </div>
  );
}

export default FavAttractions;
