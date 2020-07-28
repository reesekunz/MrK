import React from "react";
import "../Hobbies.scss";
import USAWomens from "../../images/USAWomens.jpeg";

function Soccer() {
  return (
    <div className="fav-characters-container" id="soccer">
      <div className="disney-content">
        <span className="emoji">⚽</span>

        <ul>
          <li>
            I love watching the US teams in the World Cup, both mens and ladies.
          </li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img
          src={USAWomens}
          className="rafiki-img"
          alt="USA Womens National Soccer Team"
        />
      </div>
    </div>
  );
}

export default Soccer;
