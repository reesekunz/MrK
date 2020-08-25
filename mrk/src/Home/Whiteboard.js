import React from "react";
import "./Whiteboard.scss";
import { Route, NavLink } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Whiteboard() {
  return (
    <div className="whiteboard-container">
      <div id="content">
        <div id="white-board">
          <div id="text">
            <span>Welcome to Mr. Kunz' Classroom! 👋</span>
          </div>

          <div className="whiteboard-content">
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
            </div>
            <div className="about-contact-container">
              <NavLink
                to="/about"
                activeClassName="activeNavButton"
                className="link"
              >
                {" "}
                About
              </NavLink>
              <NavLink
                to="/events"
                activeClassName="activeNavButton"
                className="link"
              >
                Events
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="activeNavButton"
                className="link"
              >
                {" "}
                Contact
              </NavLink>
            </div>
            <div className="zoom-container">
              <p className="zoom-zoom">Zoom:</p>
              <a href="https://zoom.us/j/92949976715?pwd=bk1yQUdQT044bkY1MS9MNFlwSnlMdz09">
                <img src="https://img.icons8.com/fluent/32/000000/zoom.png" />
              </a>
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
