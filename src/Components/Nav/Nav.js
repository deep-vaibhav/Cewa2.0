import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Assets/image/cewa.png";
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

class Nav extends React.Component {
  componentDidMount() {
    const nav_button = document.querySelector(".Nav-button");
    const nav = document.querySelector(".Nav-li");
    const navLinks = document.querySelectorAll(".Nav-li li");
    console.log(navLinks);

    nav_button.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navlinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      nav_button.classList.toggle("toggle");
    });
  }

  render() {
    return (
      <div className="Nav">
        <div className="Nav-title">
          <Link to="">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="Nav-li">
          <Link to="./about">
            <li>About us</li>
          </Link>
          <Link to="./Events">
            <li>Events</li>
          </Link>
          {/* <Link to="./gallery">
          <li>Gallery</li>
        </Link> */}
          <Link to="./membership">
            <li>Join Us</li>
          </Link>

          <Link to="./contacts">
            <li>Contact Us</li>
          </Link>
        </div>

        {/* <div className="Counter">
        <div className="counter-text">
          <p>Total Visitors</p>
        </div>
        <div className="Counter-image">
          <img
            src="https://counter2.stat.ovh/private/freecounterstat.php?c=zhupfbms3z214j3mazufyphtq7eylhze"
            border="0"
            title="free counter"
            alt="free counter"
          />
        </div>
      </div> */}
        {/* <div className="Nav-button" onClick={onHandleButton}>
        <h1>≡</h1>
        {NavButton && (
          <div className="Nav-button-list">
            <Link to="./about">
              <li>About us</li>
            </Link>
            <Link to="./Programs">
              <li>Our Program</li>
            </Link>
            <Link to="./gallery">
              <li>Gallery</li>
            </Link>
            <Link to="./membership">
              <li>For Members</li>
            </Link>
            <Link to="./contacts">
              <li>Contact Us</li>
            </Link>
          </div>
        )}
      </div> */}

        <div class="Nav-button">
          <div className="nav-line line1"></div>
          <div className="nav-line line2"></div>
          <div className="nav-line line3"></div>
        </div>
      </div>
    );
  }
}
export default Nav;
