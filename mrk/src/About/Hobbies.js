import React from "react";
import "./Hobbies.scss";
import { Route } from "react-router-dom";
import DisneyFan from "./DisneyFan";
import Sports from "./Sports";
import Traveling from "./Traveling";
import { HashLink as Link } from "react-router-hash-link";

function Hobbies() {
  return (
    <div className="hobbies-container" id="hobbies">
      <h1 className="about-sub-header">Hobbies</h1>
      <nav className="hobby-tabs">
        <Link to={`/about/hobbies/disney-fan#disney`} className="hobbies-link">
          Disney Fan
          {/* <IoMdSchool size={35} /> */}
        </Link>
        <Link to={`/about/hobbies/sports#sports`} className="hobbies-link">
          Sports
          {/* <GrWorkshop size={35} color="white" /> */}
        </Link>
        <Link to={`/about/hobbies/traveling#traveling`} className="hobbies-link">
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
