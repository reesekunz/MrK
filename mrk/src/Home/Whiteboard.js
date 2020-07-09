import React from "react";
import "./Whiteboard.scss";
import { Route, NavLink } from "react-router-dom";

function Whiteboard() {
  return (
    <div className="whiteboard-container">
      <div id="content">
        <div id="white-board">
          <div id="text">
            <span>Welcome to Mr. Kunz's Classroom! 👋</span>
          </div>

          <div className="whiteboard-content">
            <h3 className="whiteboard-header">Choose Your Subject Below:</h3>
            <div className="tabs">
              <NavLink
                to="/social-studies"
                activeClassName="activeNavButton"
                className="link"
              >
                Social Studies
              </NavLink>
              <NavLink
                to="/math"
                activeClassName="activeNavButton"
                className="link"
              >
                Math
              </NavLink>
              <NavLink
                to="/events"
                activeClassName="activeNavButton"
                className="link"
              >
                School Events
              </NavLink>
            </div>
          </div>

          <div id="eraser"></div>
          <div id="red-pen"></div>
          <div id="blue-pen"></div>
        </div>
      </div>
    </div>
  );
}

export default Whiteboard;
