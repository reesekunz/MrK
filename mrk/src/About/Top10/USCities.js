import React from "react";
import "../Hobbies.scss";

function USCities() {
  return (
    <div className="fav-characters-container" id="us-cities">
      <div className="disney-content">
        <h2>Top 10 U.S. Cities I've Visited:</h2>

        <ul>
          <li>Anaheim, California</li>
          <li>Las Vegas, Nevada</li>
          <li>Nashville, Tennessee</li>
          <li>New York, New York</li>
          <li>Orlando, Florida</li>
          <li>Plains, Georgia</li>
          <li>San Diego, California</li>
          <li>San Francisco, California</li>
          <li>Seattle, Washington</li>
          <li>Washington, D.C.</li>
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

export default USCities;
