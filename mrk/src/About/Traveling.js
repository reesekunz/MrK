import React from "react";
import "./Hobbies.scss";
import { HashLink as Link } from "react-router-hash-link";
import { Route } from "react-router-dom";
import USStates from "./Top10/USStates";
import USCities from "./Top10/USCities";
import CivilWarSites from "./Top10/CivilWarSities";
import CivilWarBattlefields from "./Top10/CivilWarBattlefields";
function Traveling() {
  return (
    <div className="hobby-section" id="traveling">
      <h1 className="sub-header">Traveling</h1>
      <p>
        Whether it's planning for an upcoming long trip, or just getting out and
        getting away for a day or two, I love to travel.
      </p>
      <p>
        I love seeing the ocean, walking through a forest, visiting a busy city,
        or checking out historical sites; I can't get enough of seeing these
        grand United States of America.
      </p>
      <p>
        Through my travels, I have visited thirty different states and six
        different countries. I've been able to see historic Civil Rights places
        in the South, the northern coast of Washington state, and driven across
        Texas seven times.
      </p>
      <p>
        I've been blessed to have met a former President in Plains, Georgia and
        Mickey Mouse in Florida and California. The journey is always as fun as
        the destination......I love traveling!
      </p>
      <nav className="disney-sports-traveling-links">
        <p className="view-my">View My Top 10:</p>

        <Link
          to={`/about/hobbies/traveling/us-cities#us-cities`}
          className="disney-sports-traveling-link"
        >
          U.S. Cities I've visited
        </Link>
        <Link
          to={`/about/hobbies/traveling/us-states#us-states`}
          className="disney-sports-traveling-link"
        >
          U.S. States for me to visit
        </Link>
      </nav>
      <p className="civil-war">
        I also have a huge interest in the U.S. Civil War. I have gotten the
        opportunity to visit several sites linked to the history of this
        five-year long event in U.S. History....
      </p>
      <nav className="disney-sports-traveling-links">
        <p className="view-my">View Civil War Places I've Visited:</p>

        <Link
          to={`/about/hobbies/traveling/civil-war-sites#sites`}
          className="disney-sports-traveling-link"
        >
          Sites
        </Link>
        <Link
          to={`/about/hobbies/traveling/civil-war-battlefields#battlefields`}
          className="disney-sports-traveling-link"
        >
          Battlefields
        </Link>
      </nav>
      <Route path="/about/hobbies/traveling/us-states" component={USStates} />
      <Route path="/about/hobbies/traveling/us-cities" component={USCities} />
      <Route
        path="/about/hobbies/traveling/civil-war-sites"
        component={CivilWarSites}
      />
      <Route
        path="/about/hobbies/traveling/civil-war-battlefields"
        component={CivilWarBattlefields}
      />
    </div>
  );
}

export default Traveling;
