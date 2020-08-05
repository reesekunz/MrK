import React from "react";
import "../Hobbies.scss";

function USStates() {
  return (
    <div className="fav-characters-container" id="us-states">
      <div className="disney-content">
        <h2>Top 10 U.S. States for me to visit:</h2>

        <ul>
          <li>California</li>
          <li>Florida</li>
          <li>Georgia</li>
          <li>Oregon</li>
          <li>New York</li>
          <li>Pennsylvania</li>
          <li>South Carolina</li>
          <li>Tennessee</li>
          <li>Texas</li>
          <li>Washington</li>
        </ul>
      </div>
      <div className="img-wrapper">
        {/* <img
          src={Nats}
          className="rafiki-img"
          id="sports-team"
          alt="Washington Nationals"
        /> */}
      </div>
    </div>
  );
}

export default USStates;
