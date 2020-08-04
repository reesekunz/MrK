import React from "react";
import "../Hobbies.scss";
import USA from "../../images/USA.png";

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
          src={USA}
          className="rafiki-img"
          id="sports-team"
          alt="USA Womens National Soccer Team"
        />
      </div>
    </div>
  );
}

export default Soccer;
