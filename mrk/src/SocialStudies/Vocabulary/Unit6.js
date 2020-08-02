import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter14 from "./Chapter14";
import Chapter15 from "./Chapter15";
import Chapter16 from "./Chapter16";

function Unit6() {
  return (
    <div className="unit-container">
      <Hamburger />
      <img
        src="https://img.icons8.com/color/150/000000/medieval-crown.png"
        className="subject-img"
      />
      <h3 className="subject-header">Unit 6: Europe in the Middle Ages</h3>
      <div className="chapters-wrappers">
        <div className="chapter-links">
          <Link to={`/unit6/chapter14`} className="chapter-link">
            Chapter 14: A New Civilization in Europe
          </Link>
          <Link to={`/unit6/chapter15`} className="chapter-link">
            Chapter 15: The Medieval Conflicts and Crusades
          </Link>
          <Link to={`/unit6/chapter16`} className="chapter-link">
            Chapter 16: A Changing Medieval World
          </Link>
        </div>
      </div>
      <Route path="/unit6/chapter14" component={Chapter14} />
      <Route path="/unit6/chapter15" component={Chapter15} />
      <Route path="/unit6/chapter16" component={Chapter16} />
    </div>
  );
}

export default Unit6;
