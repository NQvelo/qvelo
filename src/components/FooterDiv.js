import React from "react";
import "./FooterDiv.css";

import { Facebook, Linkedin, Dribbble, GitHub, Instagram } from "react-feather";

function FooterDivComponent({ toggleMode, isDarkMode }) {
  return (
    <div className={isDarkMode ? "footercont-dark" : "footercont-light"}>
      <hr className={isDarkMode ? "hr-dark" : "hr-light"} />
      <div className="icons">
        <a
          className={isDarkMode ? "a-dark" : "a-light"}
          href="https://www.facebook.com/Nick.Qvelo/"
        >
          <Facebook size="24" />
        </a>
        <a
          className={isDarkMode ? "a-dark" : "a-light"}
          href="https://instagram.com/qvelo_"
        >
          <Instagram size="24" />
        </a>
        <a
          className={isDarkMode ? "a-dark" : "a-light"}
          href="https://www.linkedin.com/in/nikolozqvelidze/"
        >
          <Linkedin size="24" />
        </a>

        <a
          className={isDarkMode ? "a-dark" : "a-light"}
          href="https://dribbble.com/Qvelo"
        >
          <Dribbble size="24" />
        </a>
        <a
          className={isDarkMode ? "a-dark" : "a-light"}
          href="https://github.com/NQvelo"
        >
          <GitHub size="24" />
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Nick Qvelidze © 2023 - All rights reserved</p>
      </div>
    </div>
  );
}
export default FooterDivComponent;
