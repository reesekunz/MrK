import React from "react";
import "./Hobbies.scss";
import { Route, Link } from "react-router-dom";
import DisneyFan from "./DisneyFan";
import Sports from "./Sports";
import Traveling from "./Traveling";

function Hobbies() {
  return (
    <div className="hobbies-container" id="hobbies">
      <h1 className="about-sub-header">Hobbies</h1>
      <nav className="hobby-tabs">
        <Link to={`/about/hobbies/disney-fan`} className="hobbies-link">
          Disney Fan
          {/* <IoMdSchool size={35} /> */}
        </Link>
        <Link to={`/about/hobbies/sports`} className="hobbies-link">
          Sports
          {/* <GrWorkshop size={35} color="white" /> */}
        </Link>
        <Link to={`/about/hobbies/traveling`} className="hobbies-link">
          Traveling
          {/* <AiOutlineSmile size={35} /> */}
        </Link>
      </nav>
      <Route path="/about/hobbies/disney-fan" component={DisneyFan} />
      <Route path="/about/hobbies/sports" component={Sports} />
      <Route path="/about/hobbies/traveling" component={Traveling} />
    </div>
  );
}

export default Hobbies;
