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
import { BsChatDots } from "react-icons/bs";

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
        <GiHamburgerMenu size={45} color="white" />
      </div>
      <div id="myNav" className="overlay" onClick={closeNav}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <div className="close-x">
            <IoIosCloseCircleOutline size={45} color="white" />
          </div>
        </a>

        <div className="overlay-content">
          <div class="eachNav" id="home">
            <IoIosHome size={25} />
            <Link to="/">Home</Link>
          </div>
          <div className="eachNav" id="social-studies">
            <IoMdGlobe size={25} />
            <a href="/social-studies">Social Studies</a>
          </div>
          <div className="eachNav" id="math">
            <AiOutlineCalculator size={25} />
            <a href="/math">Math</a>
          </div>
          <div className="eachNav" id="events">
            <IoMdCalendar size={25} />
            <a href="/events">School Events</a>
          </div>
          <div className="eachNav" id="contact">
            <BsChatDots size={25} />
            <a href="/contact">Contact Mr. Kunz</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
