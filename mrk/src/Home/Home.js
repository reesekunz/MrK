import React from "react";
import "./Home.scss";
import Whiteboard from "./Whiteboard";
function Home() {
  return (
    <div className="home-container">
      <div className="stage">
        <div className="threed floor"> </div>
        <div className="threed leftwall ">
          <div className="quote">
            “Success is peace of mind, which is a direct result of
            self-satisfaction in knowing you did your best to become the best
            you are capable of becoming.”
            <div className="quote-by">- John Wooden</div>
          </div>
        </div>
        <div className="threed rightwall "></div>
        <div className="threed center ">
          <Whiteboard />
        </div>
        <div className="threed ceiling "></div>
      </div>
    </div>
  );
}

export default Home;
