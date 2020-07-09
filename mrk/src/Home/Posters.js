import React from "react";
import "./Posters.scss";
import MathJokes from "../images/MathJokes.jpg";
// import { RiWindowsLine } from "react-icons/ri";

function Posters() {
  return (
    <div className="posters-container">
      <div className="poster">
        <img src={MathJokes} alt="math poster" className="poster-img" />
      </div>
      <div className="poster">
        <div className="window">
          <div className="row">
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="row">
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posters;
