import React from "react";
import "./Hobbies";
import { Route } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
import Baseball from "./FavSportsTeams/Baseball";
import Basketball from "./FavSportsTeams/Basketball";
import Football from "./FavSportsTeams/Football";
import Hockey from "./FavSportsTeams/Hockey";
import Soccer from "./FavSportsTeams/Soccer";

function FavSportsTeams() {
  return (
    <div className="fav-sports-teams-container" id="fav-sports-teams">
      <h2>Favorite Sports Teams:</h2>
      <div className="emoji-links">
        <div className="view-by-sport">View By Sport:</div>
        <Link
          to={`/about/hobbies/sports/favorite-teams/baseball#baseball`}
          className="emoji-link"
        >
          <span className="emoji">⚾</span>
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-teams/basketball#basketball`}
          className="emoji-link"
        >
          <span className="emoji">🏀</span>
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-teams/football#football`}
          className="emoji-link"
        >
          <span className="emoji">🏈</span>
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-teams/hockey#hockey`}
          className="emoji-link"
        >
          <span className="emoji">🏒</span>
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-teams/soccer#soccer`}
          className="emoji-link"
        >
          <span className="emoji">⚽</span>
        </Link>
      </div>
      <Route
        path="/about/hobbies/sports/favorite-teams/baseball"
        component={Baseball}
      />
      <Route
        path="/about/hobbies/sports/favorite-teams/basketball"
        component={Basketball}
      />
      <Route
        path="/about/hobbies/sports/favorite-teams/football"
        component={Football}
      />
      <Route
        path="/about/hobbies/sports/favorite-teams/hockey"
        component={Hockey}
      />
      <Route
        path="/about/hobbies/sports/favorite-teams/soccer"
        component={Soccer}
      />
    </div>
  );
}

export default FavSportsTeams;
