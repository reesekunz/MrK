import React from "react";
import "./Hobbies.scss";
import { HashLink as Link } from "react-router-hash-link";
import { Route } from "react-router-dom";
import FavSportsTeams from "./FavTeams";
import FavSportsMemories from "./FavMemories";
import FavSportsMovies from "./FavSportsMovies";
function Sports() {
  return (
    <div className="hobby-section" id="sports">
      <h1 className="sub-header">Sports</h1>

      <nav className="sports-links">
        <Link
          to={`/about/hobbies/sports/favorite-teams#fav-sports-teams`}
          className="disney-fan-link"
        >
          Favorite Sports Teams
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-memories#fav-sports-memories`}
          className="disney-fan-link"
        >
          Favorite Sports Memories
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-movies#fav-sports-movies`}
          className="disney-fan-link"
        >
          Favorite Sports Movies
        </Link>
      </nav>

      <Route
        path="/about/hobbies/sports/favorite-teams"
        component={FavSportsTeams}
      />
      <Route
        path="/about/hobbies/sports/favorite-memories"
        component={FavSportsMemories}
      />
      <Route
        path="/about/hobbies/sports/favorite-movies"
        component={FavSportsMovies}
      />
    </div>
  );
}

export default Sports;
