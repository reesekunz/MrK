import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";
import Chapter9 from "./Chapter9";

function Unit4() {
  return (
    <div className="unit-container">
      <Hamburger />
      <div className="jump-to-wrapper-both">
        <Link to={`/unit3`} className="jump-to-link">
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-left.png"
            className="jump-to-arrow"
          />
          Unit 3: Sub-Saharan Africa
        </Link>
        <Link to={`/unit5`} className="jump-to-link">
          Unit 5: East Asia Civilizations
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"
            className="jump-to-arrow"
          />
        </Link>
      </div>
      <img
        src="https://img.icons8.com/cotton/150/000000/chichen-itza--v1.png"
        className="subject-img"
      />
      <h3 className="subject-header"> Unit 4: Civilizations in the Americas</h3>
      <div className="chapters-wrappers">
        <div className="chapter-links">
          <Link to={`/unit4/chapter7`} className="chapter-link">
            Chapter 7: The Mayas
          </Link>
          <Link to={`/unit4/chapter8`} className="chapter-link">
            Chapter 8: The Incas
          </Link>
          <Link to={`/unit4/chapter9`} className="chapter-link">
            Chapter 9: The Aztecs
          </Link>
        </div>
      </div>
      <Route path="/unit4/chapter7" component={Chapter7} />
      <Route path="/unit4/chapter8" component={Chapter8} />
      <Route path="/unit4/chapter9" component={Chapter9} />
    </div>
  );
}

export default Unit4;
