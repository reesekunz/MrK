import React from "react";
import "./Hobbies";
import Gonzo from "../images/Gonzo.jpeg";

function FavSportsMemories() {
  return (
    <div className="fav-sports-memories-container" id="fav-sports-memories">
      <h2>Favorite Sports Memories:</h2>
      <h3> Getting to go to Games 2, 6, and 7 of the 2001 World Series</h3>
      <ul>
        <li>Took my oldest son to Game 2...</li>
        <li>My mom to Game 6 and...</li>
        <li>My wife to Game 7!</li>
      </ul>
      <div className="img-wrapper">
        <img
          src={Gonzo}
          className="rafiki-img"
          alt="Luis Gonzalez walk off hit"
        />
        <p className="img-caption">Luis Gonzalez' walk off hit in Game 7</p>
      </div>
      <h3>
        {" "}
        Volunteering at the 2011 Baseball All-Star Game Fan Festival and working
        in the Green Room.
      </h3>

      <ul>
        <li>
          I got to meet several Hall of Famers, including Rollie Fingers, Cal
          Ripken, Gaylord Perry, Earl Weaver...
        </li>
      </ul>
      <h3> Coaching Little League Baseball for over 25 years!</h3>
      <ul>
        <li>
          Oldest pitching a complete game, near shutout, with a band playing
          down the street...He predicted he was going to pitch that well the
          night before...
        </li>
        <li>
          Middle son going on a hitting rampage and hitting three homeruns in
          their "Tournament of Champions" tournament
        </li>
        <li>
          Youngest son playing a FANTASTIC tournament, hitting and pitching,
          even hitting a homerun in his Cooperstown tournament
        </li>
        <li>
          Loving baseball so much that my wife and I went to a Padres vs. Mets
          game while on our honeymoon, in 1986. (The year the Mets won the World
          Series!)
        </li>
      </ul>
      <h3>
        {" "}
        Coaching youth basketball (Fifth grade through post-high school) for
        about twenty years
      </h3>
      <ul>
        <li>Coaching in the Suns arena several times in a championship game</li>
        <li>Getting to coach the son of an NBA coach</li>
        <li>
          Getting to coach a player that played for the University of Arizona
        </li>
        <li>Seeing how awesome my sons were to their teammates and friends</li>
      </ul>
      <h3>Getting to attend the 1984 Olympics with my mom, sister and wife</h3>
      <h3>Visiting the Hall-of-Fames</h3>
      <ul>
        <li>
          Went to the Baseball Hall-of-Fame in Cooperstown, NY, the Basketball
          Hall-of-Fame in Springfield, MA, and Negro League Baseball
          Hall-of-Fame in Kansas City, MO.
        </li>
      </ul>
    </div>
  );
}

export default FavSportsMemories;
