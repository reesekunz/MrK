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
    <div className="hobby-section" id="disney">
      <h1 className="sub-header">Disney Fan</h1>
      <p>
        I've been to Disneyland about 200 times. Also got to visit Disney World
        many times while working in Florida. In fact, in April 2019, I visited
        all for Disney World Parks (Magic Kingdom, EPCOT, Disney Studios, and
        Animal Kingdom) in one day!
      </p>

      <nav className="disney-sports-traveling-links">
        <p className="view-my">View My Favorite Disney:</p>
        <Link
          to={`/about/hobbies/disney-fan/favorite-characters#fav-characters`}
          className="disney-sports-traveling-link"
        >
          Characters
        </Link>
        <Link
          to={`/about/hobbies/disney-fan/favorite-animated-movies#fav-animated-movies`}
          className="disney-sports-traveling-link"
        >
          Animated Movies
        </Link>
        <Link
          to={`/about/hobbies/disney-fan/favorite-non-animated-movies#fav-non-animated-movies`}
          className="disney-sports-traveling-link"
        >
          Non-Animated Movies
        </Link>
        <Link
          to={`/about/hobbies/disney-fan/favorite-attractions#fav-attractions`}
          className="disney-sports-traveling-link"
        >
          Attractions
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
