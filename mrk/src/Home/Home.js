import React from "react";
import "./Home.scss";
import WelcomeMat from "./WelcomeMat";
function Home() {
  return (
    <div className="home-container">
      <div className="stage">
        <div className="threed floor">
          <WelcomeMat />
        </div>
        <div className="threed leftwall "></div>
        <div className="threed rightwall "></div>
        <div className="threed center "></div>
        <div className="threed ceiling "></div>
      </div>
    </div>
  );
}

export default Home;
