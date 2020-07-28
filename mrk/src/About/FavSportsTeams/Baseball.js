import React from "react";
import "../Hobbies.scss";
import Nats from "../../images/Nats.jpeg";

function Baseball() {
  return (
    <div className="sport-container" id="baseball">
      <span className="emoji">⚾</span>

      <ul>
        <li> Arizona Diamondbacks</li>
        <li>Washington Nationals</li>
        <li>Los Angeles Angels</li>
        <li>Tampa Bay Rays</li>
      </ul>
      <div className="img-wrapper">
        <img src={Nats} className="rafiki-img" alt="Washington Nationals" />
        <p className="img-caption">2019 World Series Winners! Go Nats!</p>
      </div>
    </div>
  );
}

export default Baseball;
