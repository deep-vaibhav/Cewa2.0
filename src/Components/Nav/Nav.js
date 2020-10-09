import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../Assets/image/cewa.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  const handleNavLinkClick = () => {
    setIsClicked(false);
  };

  return (
    <div className="Nav">
      <div className="Nav-title">
        <Link to="" onClick={handleNavLinkClick}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={isClicked ? "Nav-li-active" : "Nav-li"}>
        <Link to="./about" onClick={handleNavLinkClick}>
          <li>About us</li>
        </Link>
        <Link to="./Events" onClick={handleNavLinkClick}>
          <li>Events</li>
        </Link>
        <Link to="./membership" onClick={handleNavLinkClick}>
          <li>Join Us</li>
        </Link>
        <Link to="./contacts" onClick={handleNavLinkClick}>
          <li>Contact Us</li>
        </Link>
      </div>
      <div className="menu-icon">
        <a onClick={handleMenuClick}>
          {isClicked ? (
            <CloseIcon className="menu_icon" />
          ) : (
            <MenuIcon className="menu_icon" />
          )}
        </a>
      </div>
    </div>
  );
}
export default Nav;
