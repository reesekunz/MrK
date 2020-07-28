import React from "react";
import "../Hobbies.scss";
import Nats from "../../images/Nats.jpeg";

function Baseball() {
  return (
    <div className="fav-characters-container" id="baseball">
      <div className="disney-content">
        <span className="emoji">⚾</span>

        <ul>
          <li> Arizona Diamondbacks</li>
          <li>Washington Nationals</li>
          <li>Los Angeles Angels</li>
          <li>Tampa Bay Rays</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img src={Nats} className="rafiki-img" alt="Washington Nationals" />
      </div>
    </div>
  );
}

export default Baseball;
