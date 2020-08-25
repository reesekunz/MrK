import React from "react";
import "./IXLDirections.scss";
import HappyGlobe from "../images/HappyGlobe.png";
import Hamburger from "../util/Hamburger";

function IXLDirections() {
  return (
    <div>
      <Hamburger />
      <div className="ixl-directions-container">
        <h1 className="page-header">I.X.L. Directions - Social Studies</h1>
        <h3 className="sub-header">I.X.L. Lessons are graded!</h3>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <p>
              Reminder - Your Social Studies and your Math/ELA login information
              are different!
            </p>
            <p>
              The expectation is that you are responsible for completing all
              assigned I.X.L. lessons within the time frame given.
            </p>
            <p>
              Make certain that you are doing the correct{" "}
              <strong>Social Studies </strong> lesson to receive credit. Don’t
              be that student that “accidentally” does a Language Arts lesson
              that was assigned by your Social Studies teacher!
            </p>
          </div>
          <div className="img-container">
            <img src={HappyGlobe} alt="Happy Globe" className="math-img" />
          </div>
        </div>
        <p>When I assign an IXL lesson, it will look like this:</p>
        <h3>
          <strong>5L4</strong>
        </h3>
        <p>
          The first number tells you what grade level you need to go to in your
          I.X.L. program…. Again, please make certain that you are doing the{" "}
          <strong>Social Studies </strong>
          section.
        </p>
        <p>
          The letter tells you which section to go to in the{" "}
          <strong>Social Studies </strong>
          for the assigned grade level.
        </p>
        <p>
          The last letter will tell you what particular lesson you need to work
          on in the correct section for the <strong>Social Studies </strong> at
          the assigned grade level.
        </p>
        <p>
          The grade you receive for IXL. is based on your SmartScore (in the
          lower right hand corner of your IXL screen.
        </p>
        <p>Correct answers make your SmartScore increase.</p>
        <p>Incorrect answers make your SmartScore decrease.</p>

        <p>
          If you have any questions or need clarification, please{" "}
          <a href="/contact" className="contact-link">
            Contact Mr. Kunz.
          </a>
        </p>
      </div>
    </div>
  );
}

export default IXLDirections;
