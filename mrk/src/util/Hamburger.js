import React, { useState } from "react";
import "./Hamburger.scss";
import {
  IoIosHome,
  IoMdBook,
  IoIosBasketball,
  IoMdGlobe,
  IoMdCalendar,
  IoIosCloseCircleOutline
} from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCalculator } from "react-icons/ai";
import { BsChatDots, BsPersonSquare } from "react-icons/bs";

import { Link } from "react-router-dom";
function Hamburger() {
  const openNav = () => {
    document.getElementById("myNav").style.width = "30%";
    // document.querySelector(".home-container").style.opacity = "20%";
    // document.querySelector(".intro-container").style.opacity = "20%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div>
      <div className="hamburger-menu" onClick={openNav}>
        <GiHamburgerMenu size={45} color="yellow" />
      </div>
      <div id="myNav" className="overlay" onClick={closeNav}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <div className="close-x">
            <IoIosCloseCircleOutline size={45} color="white" />
          </div>
        </a>

        <div className="overlay-content">
          <div className="eachNav" id="home">
            <Link to="/">
              {" "}
              <IoIosHome size={25} />
            </Link>

            <Link to="/">Home</Link>
          </div>
          <div className="eachNav" id="social-studies">
            <a href="/social-studies">
              {" "}
              <IoMdGlobe size={25} />
            </a>

            <a href="/social-studies">Social Studies</a>
          </div>
          <div className="eachNav" id="math">
            <a href="/math">
              {" "}
              <AiOutlineCalculator size={25} />
            </a>

            <a href="/math">Math</a>
          </div>
          <div className="eachNav" id="events">
            <a href="/events">
              {" "}
              <IoMdCalendar size={25} />
            </a>

            <a href="/events">School Events</a>
          </div>
          <div className="eachNav" id="about">
            <a href="/about">
              {" "}
              <BsPersonSquare size={25} />
            </a>

            <a href="/about">About</a>
          </div>
          <div className="eachNav" id="contact">
            <a href="/contact">
              {" "}
              <BsChatDots size={25} />
            </a>

            <a href="/contact">Contact </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
