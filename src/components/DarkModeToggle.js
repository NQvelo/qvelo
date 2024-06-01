import React from "react";
import { Sun, Moon } from "react-feather";
import "./DarkModeToggle.css";

const DarkModeToggle = ({ toggleMode, isDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <button
        className={isDarkMode ? "dark-mode-btn" : "light-mode-btn"}
        onClick={toggleMode}
      >
        {isDarkMode ? <Sun /> : <Moon />}
        {isDarkMode ? (
          <p className="pDL">light mode</p>
        ) : (
          <p className="pDL">dark mode</p>
        )}
        {/* &nbsp;&nbsp; */}
        {/* {isDarkMode ? "Light Mode" : "Dark Mode"} */}
      </button>
    </div>
  );
};

export default DarkModeToggle;
