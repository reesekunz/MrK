import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

function Unit1() {
  return (
    <div className="unit-container">
      <Hamburger />
      <div className="jump-to-wrapper-right">
        <Link to={`/unit2`} className="jump-to-link">
          Unit 2: Islamic Civilization
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"
            className="jump-to-arrow"
          />
        </Link>
      </div>
      <div className="unit-wrapper">
        <img
          src="https://img.icons8.com/cotton/150/000000/coliseum--v1.png"
          className="unit-subject-img"
        />
        <h3 className="subject-header">Unit 1: Rome and Byzantium</h3>
        <div className="chapters-wrappers">
          <div className="chapter-links">
            <Link to={`/unit1/chapter1`} className="chapter-link">
              Chapter 1: The Roman Empire
            </Link>
            <Link to={`/unit1/chapter2`} className="chapter-link">
              Chapter 2: Byzantine Empire
            </Link>
          </div>
        </div>
      </div>
      <Route path="/unit1/chapter1" component={Chapter1} />
      <Route path="/unit1/chapter2" component={Chapter2} />
    </div>
  );
}

export default Unit1;
