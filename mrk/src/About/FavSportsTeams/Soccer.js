import React from "react";
import "../Hobbies.scss";
import USAWomens from "../../images/USAWomens.jpeg";

function Soccer() {
  return (
    <div className="sport-container" id="soccer">
      <span className="emoji">⚽</span>

      <ul>
        <li>
          I love watching the US teams in the World Cup, both mens and ladies.
        </li>
      </ul>
      <div className="img-wrapper">
        <img
          src={USAWomens}
          className="rafiki-img"
          alt="USA Womens National Soccer Team"
        />
        <p className="img-caption">U.S. Women's Soccer properly celebrating</p>
      </div>
    </div>
  );
}

export default Soccer;
