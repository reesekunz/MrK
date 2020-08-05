import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";

function Unit3() {
  return (
    <div className="unit-container">
      <Hamburger />
      <div className="jump-to-wrapper-both">
        <Link to={`/unit2`} className="jump-to-link">
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-left.png"
            className="jump-to-arrow"
          />
          Unit 2: Islamic Civilization
        </Link>
        <Link to={`/unit4`} className="jump-to-link">
          Unit 4: Civilizations in the Americas
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"
            className="jump-to-arrow"
          />
        </Link>
      </div>
      <img
        src="https://img.icons8.com/color/150/000000/elephant.png"
        className="subject-img"
      />
      <h3 className="subject-header">Unit 3: Sub-Saharan Africa</h3>
      <div className="chapters-wrappers">
        <div className="chapter-links">
          <Link to={`/unit3/chapter5`} className="chapter-link">
            Chapter 5: The Rise of West African Empires
          </Link>
          <Link to={`/unit3/chapter6`} className="chapter-link">
            Chapter 6: West African Civilization
          </Link>
        </div>
      </div>
      <Route path="/unit3/chapter5" component={Chapter5} />
      <Route path="/unit3/chapter6" component={Chapter6} />
    </div>
  );
}

export default Unit3;
