import React from "react";
import "./Hobbies.scss";
import { Route } from "react-router-dom";
import FavCharacters from "./FavCharacters";
import FavAnimatedMovies from "./FavAnimatedMovies";
import FavNonAnimatedMovies from "./FavNonAnimatedMovies";
import FavAttractions from "./FavAttractions";
import { HashLink as Link } from "react-router-hash-link";

function DisneyFan() {
  return (
    <div className="hobby-section" id="disney-fan">
      <h1 className="sub-header">Disney Fan</h1>
      <p>
        I've been to Disneyland about 200 times. Also got to visit Disney World
        many times while working in Florida. In fact, in April 2019, I visited
        all for Disney World Parks (Magic Kingdom, EPCOT, Disney Studios, and
        Animal Kingdom) in one day!
      </p>

      <nav className="disney-fan-links">
        <Link
          to={`/about/hobbies/disney-fan/favorite-characters#fav-characters`}
          className="disney-fan-link"
        >
          Favorite Characters
        </Link>
        <Link
          to={`/about/hobbies/disney-fan/favorite-animated-movies#fav-animated-movies`}
          className="disney-fan-link"
        >
          Favorite Animated Movies
        </Link>
        <Link
          to={`/about/hobbies/disney-fan/favorite-non-animated-movies#fav-non-animated-movies`}
          className="disney-fan-link"
        >
          Favorite Non-Animated Movies
        </Link>
        <Link
          to={`/about/hobbies/disney-fan/favorite-attractions#fav-attractions`}
          className="disney-fan-link"
        >
          Favorite Attractions
        </Link>
      </nav>

      <Route
        path="/about/hobbies/disney-fan/favorite-characters"
        component={FavCharacters}
      />
      <Route
        path="/about/hobbies/disney-fan/favorite-animated-movies"
        component={FavAnimatedMovies}
      />
      <Route
        path="/about/hobbies/disney-fan/favorite-non-animated-movies"
        component={FavNonAnimatedMovies}
      />
      <Route
        path="/about/hobbies/disney-fan/favorite-attractions"
        component={FavAttractions}
      />
    </div>
  );
}

export default DisneyFan;
