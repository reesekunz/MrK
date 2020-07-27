import React from "react";
import "./Hobbies";
import { Route } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";
import Baseball from "./FavSportsMovies/Baseball";
import Basketball from "./FavSportsMovies/Basketball";
import Football from "./FavSportsMovies/Football";

function FavSportsMovies() {
  return (
    <div className="fav-sports-movies-container" id="fav-sports-movies">
      <h2>Favorite Sports Movies:</h2>
      <div className="emoji-links">
        View By Sport:
        <Link
          to={`/about/hobbies/sports/favorite-movies/baseball#baseball`}
          className="emoji-link"
        >
          <span className="emoji">⚾</span>
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-movies/basketball#basketball`}
          className="emoji-link"
        >
          <span className="emoji">🏀</span>
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-movies/football#football`}
          className="emoji-link"
        >
          <span className="emoji">🏈</span>
        </Link>
      </div>
      <Route
        path="/about/hobbies/sports/favorite-movies/baseball"
        component={Baseball}
      />
      <Route
        path="/about/hobbies/sports/favorite-movies/basketball"
        component={Basketball}
      />
      <Route
        path="/about/hobbies/sports/favorite-movies/football"
        component={Football}
      />
    </div>
  );
}

export default FavSportsMovies;
