import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter10 from "./Chapter10";
import Chapter11 from "./Chapter11";
import Chapter12 from "./Chapter12";
import Chapter13 from "./Chapter13";

function Unit5() {
  return (
    <div className="unit-container">
      <Hamburger />
      <img
        src="https://img.icons8.com/officel/150/000000/pagoda.png"
        className="subject-img"
      />
      <h3 className="subject-header">Unit 5: East Asia Civilizations</h3>
      <div className="chapters-wrappers">
        <div className="chapter-links">
          <Link to={`/unit5/chapter10`} className="chapter-link">
            Chapter 10: China's Golden Age
          </Link>
          <Link to={`/unit5/chapter11`} className="chapter-link">
            Chapter 11: China Under the Mongols and the Ming
          </Link>
          <Link to={`/unit5/chapter12`} className="chapter-link">
            Chapter 12: The Rise of Japan
          </Link>
          <Link to={`/unit5/chapter13`} className="chapter-link">
            Chapter 13: Japan's Golden Age
          </Link>
        </div>
      </div>
      <Route path="/unit5/chapter10" component={Chapter10} />
      <Route path="/unit5/chapter11" component={Chapter11} />
      <Route path="/unit5/chapter12" component={Chapter12} />
      <Route path="/unit5/chapter13" component={Chapter13} />
    </div>
  );
}

export default Unit5;
