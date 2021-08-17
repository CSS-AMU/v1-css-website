import React, { useState } from "react";
import logo from "./pp.jpg";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src="images/css-logo.jpeg" alt="logo" />
          <div className="heading">
            <h2>Computer Science Society</h2>
          </div>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#a"> Home</a>
            </li>
            <li>
              <a href="#a"> About</a>
            </li>
            <li>
              <a href="#a"> Education</a>
            </li>
            <li>
              <a href="#a"> Research</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <a href="#d" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
