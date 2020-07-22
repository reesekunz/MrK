import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./HobbiesNavBar.scss";

// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener("DOMContentLoaded", function() {
  // When the user scrolls the page, execute stickyNav function
  window.addEventListener("scroll", stickyNav);

  // Get the nav bar items
  var navbar = document.querySelector(".nav-items");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

function NavBar() {
  return (
    <div>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <button className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button> */}
          <div className="nav-items">
            <div className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="disney-fan"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Disney Fan
              </Link>
            </div>
            <div className="nav-item">
              <Link
                className="link"
                activeClass="active"
                to="sports"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sports
              </Link>
            </div>
            <div className="nav-item">
              <Link
                activeClass="active"
                to="traveling"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Traveling
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
