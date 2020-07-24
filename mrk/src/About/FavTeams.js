import React from "react";
import "./Hobbies";

function FavSportsTeams() {
  return (
    <div className="fav-sports-teams-container" id="fav-sports-teams">
      <h2>Favorite Teams:</h2>
      <div className="emoji-links">
        <span className="emoji">⚾</span>
        <span className="emoji">🏈</span>
        <span className="emoji">🏀</span>
        <span className="emoji">🏒</span>
        <span className="emoji">⚽</span>
      </div>
      <h3>
        <span className="emoji">⚾</span>
      </h3>
      <ul>
        <li> Arizona Diamondbacks</li>
        <li>Washington Nationals (2019 World Series Winners! Go Nats!)</li>
        <li>Los Angeles Angels</li>
        <li>Tampa Bay Rays</li>
      </ul>
      <h3>
        {" "}
        <span className="emoji">🏈</span>
      </h3>
      <ul>
        <li>Pittsburgh Steelers</li>
        <li>Arizona Cardinals</li>
        <li>Whomever is playing the Cowboys</li>
      </ul>
      <h3>
        {" "}
        <span className="emoji">🏀</span>
      </h3>
      <ul>
        <li>Phoenix Suns</li>
        <li>San Antonio Spurs </li>
      </ul>
      <h3>
        <span className="emoji">🏒</span>
      </h3>
      <ul>
        <li>Washington Capitals</li>
        <li>Phoenix Coyotes</li>
      </ul>
      <h3>
        <span className="emoji">⚽</span>
      </h3>
      <ul>
        <li>
          I love watching the US teams in the World Cup, both mens and ladies.
        </li>
      </ul>
    </div>
  );
}

export default FavSportsTeams;
