import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";

function Unit2() {
  return (
    <div className="unit-container">
      <Hamburger />
      <img
        src="https://img.icons8.com/officel/150/000000/mosque.png"
        className="subject-img"
      />
      <h3 className="subject-header">Unit 2: Islamic Civilization</h3>{" "}
      <div className="chapters-wrappers">
        <div className="chapter-links">
          <Link to={`/unit2/chapter3`} className="chapter-link">
            Chapter 3: Islam
          </Link>
          <Link to={`/unit2/chapter4`} className="chapter-link">
            Chapter 4: The Islamic World
          </Link>
        </div>
      </div>
      <Route path="/unit2/chapter3" component={Chapter3} />
      <Route path="/unit2/chapter4" component={Chapter4} />
    </div>
  );
}

export default Unit2;
