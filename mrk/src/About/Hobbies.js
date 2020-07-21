import React from "react";
import "./Hobbies.scss";
import Rafiki from "../images/Rafiki.jpg";
function Hobbies() {
  return (
    <div className="hobbies-container">
      <h1>Disney Fan</h1>
      <p>
        I've been to Disneyland about 200 times. Also got to visit Disney World
        many times while working in Florida. In fact, in April 2019, I visited
        all for Disney World Parks (Magic Kingdom, EPCOT, Disney Studios, and
        Animal Kingdom) in one day!
      </p>
      <h2>Favorite Characters:</h2>
      <ul>
        <li>Goofy</li>
        <li>Buzz Lightyear</li>
        <li>Olaf</li>
        <li>Rafiki</li>
        <li>Jiminy Cricket</li>
        <li>Forky</li>
        <li> Chip (Of Chip and Dale, not from Beauty and the Beast....)</li>
      </ul>
      <div className="img-wrapper">
        <img src={Rafiki} className="rafiki-img" alt="Rafiki!!" />
        <p className="img-caption">Rafiki!!</p>
      </div>
      <h2>Favorite Animated Disney Movies:</h2>
      <p className="explanation">
        (For this list, I've decided to include Pixar movies)
      </p>
      <ul>
        <li> "Toy Story"</li>
        <li> "Fox and the Hound"</li>
        <li> "Big Hero 6"</li>
        <li> "Monster's Inc."</li>
        <li>"The Goofy Movie"</li>
        <li> "Hercules"</li>
        <li> "Mulan"</li>
        <li> "Cars"</li>
      </ul>
      <h2>Favorite Non-Animated Disney Movies:</h2>
      <ul>
        <li> "The Parent Trap" (The Original, with Haley Mills)</li>
        <li> "The Love Bug"</li>
        <li> "Mary Poppins"</li>
        <li> "The World's Greatest Athlete"</li>
        <li>"The Mighty Ducks"</li>
        <li> "Remember the Titans"</li>
        <li> "The Rookie"</li>
        <li> "National Treasure"</li>
      </ul>
      <h2>Favorite Attractions (rides) at the Disney Parks:</h2>
      <ul>
        <li> Soarin' (California Adventure and EPCOT)</li>
        <li> Haunted Mansion (Disneyland and Magic Kingdom)</li>
        <li> Kilmanjaro Safaris (Animal Kingdom)</li>
        <li> Pandora--The World of Avatar (Animal Kingdom)</li>
        <li>
          Toy Story Midway Mania (California Adventure and Disney Studios)
        </li>
      </ul>
      <p>
        I haven't been to Star Wars Galaxy Edge, yet.... I also haven't been
        able to ride Slinky Dog Dash, yet......
      </p>
      <h1>Sports</h1>
      <h2>Favorite Teams:</h2>
      <h3>Baseball ⚾</h3>
      <ul>
        <li> Arizona Diamondbacks</li>
        <li>Washington Nationals (2019 World Series Winners! Go Nats!)</li>
        <li>Los Angeles Angels</li>
        <li>Tampa Bay Rays</li>
      </ul>
      <h3>Football 🏈</h3>
      <ul>
        <li>Pittsburgh Steelers</li>
        <li>Arizona Cardinals</li>
        <li>Whomever is playing the Cowboys</li>
      </ul>
      <h3>Basketball 🏀</h3>
      <ul>
        <li>Phoenix Suns</li>
        <li>San Antonio Spurs </li>
      </ul>
      <h3>Hockey 🏒</h3>
      <ul>
        <li>Washington Capitals</li>
        <li>Phoenix Coyotes</li>
      </ul>
      <h3>Soccer ⚽</h3>
      <ul>
        <li>
          I love watching the US teams in the World Cup, both mens and ladies.
        </li>
      </ul>
      <h2>Favorite Sports Memories:</h2>
      <h3> Getting to go to Games 2, 6, and 7 of the 2001 World Series</h3>
      <ul>
        <li>Took my oldest son to Game 2...</li>
        <li>My mom to Game 6 and...</li>
        <li>My wife to Game 7!</li>
      </ul>
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
      <h2>Favorite Sports Movies:</h2>
      <h3>Baseball ⚾</h3>
      <ul>
        <li>"Field of Dreams"</li>
        <li> "Pride of the Yankees"</li>
        <li> "Bull Durham"</li>
        <li> "The Sandlot"</li>
        <li> "The Natural"</li>
      </ul>
      <h3>Basketball 🏀</h3>
      <ul>
        <li> "Hoosiers"</li>
        <li> "Space Jam"</li>
        <li> "One on One"</li>
        <li> "Finding Forester"</li>
        <li> "Coach Carter"</li>
      </ul>
      <h3>Football 🏈</h3>
      <ul>
        <li> "Remember the Titans"</li>
        <li> "Invincible"</li>
        <li> "Jerry Maguire"</li>
        <li> "The Blind Side"</li>
        <li> "Draft Day"</li>
      </ul>
    </div>
  );
}

export default Hobbies;
