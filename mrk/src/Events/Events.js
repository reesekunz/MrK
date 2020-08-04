import React from "react";
import "./Events.scss";
import Hamburger from "../util/Hamburger";

function Events() {
  return (
    <div className="events-container">
      <Hamburger />
      <h3 className="subject-header">School Events</h3>
      <div className="content">
        {/* 1st Day of School */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">1st Day of School</div>
          </h3>
          <h5 className="date">August 12</h5>
        </div>
        {/* Back to School Night */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Back to School Night</div>
          </h3>
          <h5 className="date">August 19</h5>
        </div>
        {/* Labor Day (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Labor Day (No School)</div>
          </h3>
          <h5 className="date">September 7</h5>
        </div>
        {/*  Native American Day (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Native American Day (No School)</div>
          </h3>
          <h5 className="date">October 9</h5>
        </div>
        {/* Parent Conferences */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Parent Conferences</div>
          </h3>
          <h5 className="date">October 15</h5>
        </div>
        {/* Veteran's Day (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Veteran's Day (No School)</div>
          </h3>
          <h5 className="date">November 11</h5>
        </div>
        {/*   Fall Break */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Fall Break</div>
          </h3>
          <h5 className="date"> November 21 - 29</h5>
        </div>
        {/*  Winter Break */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Winter Break</div>
          </h3>
          <h5 className="date">December 19 - January 11</h5>
        </div>
        {/* Martin Luther King Day  (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Martin Luther King Day (No School)</div>
          </h3>
          <h5 className="date">January 18</h5>
        </div>
        {/*  Lincoln's Birthday Observed (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Lincoln's Birthday Observed (No School)</div>
          </h3>
          <h5 className="date">February 8</h5>
        </div>
        {/* Mr. Kunz' Birthday */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Mr. Kunz' Birthday</div>
          </h3>
          <h5 className="date">February 11 </h5>
        </div>
        {/* President's Day  (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">President's Day (No School)</div>
          </h3>
          <h5 className="date">February 15</h5>
        </div>
        {/* Parent Conferences */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Parent Conferences</div>
          </h3>
          <h5 className="date">March 18</h5>
        </div>
        {/* Spring Break */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Spring Break</div>
          </h3>
          <h5 className="date">March 27 - April 4</h5>
        </div>
        {/* Memorial Day (No School) */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">Memorial Day (No School)</div>
          </h3>
          <h5 className="date">May 31</h5>
        </div>
        {/* 8th Grade Promotion */}
        <div className="event-wrapper">
          <h3 className="title">
            <div className="event">8th Grade Promotion</div>
          </h3>
          <h5 className="date">June 3</h5>
        </div>
      </div>
    </div>
  );
}

export default Events;
