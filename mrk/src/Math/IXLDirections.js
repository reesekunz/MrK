import React from "react";
import "./IXLDirections.scss";
import MathIsTight from "../images/MathIsTight.png";

function IXLDirections() {
  return (
    <div className="ixl-directions-container">
      <h1 className="page-header">I.X.L. Directions</h1>
      <h3 className="sub-header">I.X.L. Lessons are graded!</h3>
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p>
            You are a 7th grader. Since you’re a 7th grader, the expectation is
            that you are responsible for completing a <strong>MINIMUM </strong>
            of seven (7) IXL lessons per week.
          </p>
          <p>
            Make certain that you are doing the correct <strong>Math </strong>
            lesson to receive credit. Don’t be that student that “accidentally”
            does a Language Arts lesson that was assigned by your math teacher!
          </p>
        </div>
        <div className="img-container">
          <img src={MathIsTight} alt="math is tight" className="math-img" />
        </div>
      </div>
      <p>When I assign an IXL lesson, it will look like this:</p>
      <h3>
        <strong>5L4</strong>
      </h3>
      <p>
        The first number tells you what grade level you need to go to in your
        I.X.L. program…. Again, please make certain that you are doing the{" "}
        <strong>Math </strong>
        section.
      </p>
      <p>
        The letter tells you which section to go to in the{" "}
        <strong>Math </strong>
        for the assigned grade level.
      </p>
      <p>
        The last letter will tell you what particular lesson you need to work on
        in the correct section for the <strong>Math </strong> at the assigned
        grade level.
      </p>
      <p>
        The grade you receive for IXL. is based on your SmartScore (In the lower
        right hand corner of your IXL screen.
      </p>
      <p>Correct answers make your SmartScore increase.</p>
      <p>Incorrect answers make your SmartScore decrease.</p>
      <p>
        For this Math class, 95 points on your SmartScore earns you 100 points
        in your gradebook!
      </p>
      <p>
        If you have any questions or need clarification, please{" "}
        <a href="/contact" className="contact-link">
          Contact Mr. Kunz.
        </a>
      </p>
    </div>
  );
}

export default IXLDirections;
