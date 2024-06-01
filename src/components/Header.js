import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "../assets/qveloLogo.png";
// import { Link } from "react-scroll";

import "./Header.css";

import "./Header.css";
import DarkModeToggle from "../components/DarkModeToggle";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Add state for responsive menu

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Router>
      <header className={`header ${scrolling ? "scrolling" : ""}`}>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${showMenu ? "open" : ""}`}></div>
        </div>
        <nav className={`nav ${showMenu ? "open" : ""}`}>
          <ul>
            <div className="logo">
              <img src={logo} alt="ss" className="logoImage" />
            </div>

            <li>
              <Link
                to={"/"}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              ></Link>
            </li>

            <li>
              <Link
                to={"Home"}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"Work"}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="../WorkPages/WorkPg.js"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
          {/* <DarkModeToggle toggleMode={toggleMode} isDarkMode={isDarkMode} /> */}
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/work" />
          <Route path="/about" />
        </Routes>
      </header>
    </Router>
  );
};

export default Header;
