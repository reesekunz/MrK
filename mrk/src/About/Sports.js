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
      <p>
        Sports have always been a large part of my life. I've been blessed to
        have attended World Series games, a couple of NBA Championship games,
        Super Bowl XXX, Wimbledon tennis tournament, NBA All-Star game, and the
        1984 Los Angeles Olympics.
      </p>
      <p>
        Whether it's watching the Steelers play on Sunday afternoons, attending
        a minor league baseball game, announcing Little League All-Star games,
        or coaching a YMCA game, I look forward to every second of action and
        seeing people give their best effort.{" "}
      </p>
      <nav className="disney-sports-traveling-links">
        <p className="view-my">View My Favorite Sports:</p>

        <Link
          to={`/about/hobbies/sports/favorite-teams#fav-sports-teams`}
          className="disney-sports-traveling-link"
        >
          Teams
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-memories#fav-sports-memories`}
          className="disney-sports-traveling-link"
        >
          Memories
        </Link>
        <Link
          to={`/about/hobbies/sports/favorite-movies#fav-sports-movies`}
          className="disney-sports-traveling-link"
        >
          Movies
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
