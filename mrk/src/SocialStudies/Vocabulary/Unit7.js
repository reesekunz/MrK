import React from "react";
import Hamburger from "../../util/Hamburger";
import "./Unit.scss";
import { Route, Link } from "react-router-dom";
import Chapter17 from "./Chapter17";
import Chapter18 from "./Chapter18";
import Chapter19 from "./Chapter19";
import Chapter20 from "./Chapter20";

function Unit7() {
  return (
    <div className="unit-container">
      <Hamburger />
      <img
        src="https://img.icons8.com/plasticine/150/000000/armored-breastplate.png"
        className="subject-img"
      />
      <h3 className="subject-header">Unit 7: Early Modern Europe</h3>{" "}
      <div className="chapters-wrappers">
        <div className="chapter-links">
          <Link to={`/unit7/chapter17`} className="chapter-link">
            Chapter 17: The Renaissance
          </Link>
          <Link to={`/unit7/chapter18`} className="chapter-link">
            Chapter 18: The Reformation
          </Link>
          <Link to={`/unit7/chapter19`} className="chapter-link">
            Chapter 19: Age of Exploration
          </Link>
          <Link to={`/unit7/chapter20`} className="chapter-link">
            Chapter 20: Revolutions in Thought
          </Link>
        </div>
      </div>
      <Route path="/unit7/chapter17" component={Chapter17} />
      <Route path="/unit7/chapter18" component={Chapter18} />
      <Route path="/unit7/chapter19" component={Chapter19} />
      <Route path="/unit7/chapter20" component={Chapter20} />
    </div>
  );
}

export default Unit7;
