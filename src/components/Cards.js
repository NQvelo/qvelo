import React from "react";
import "./Cards.css";

function CardsComponent({ image, width, href, toggleMode, isDarkMode }) {
  return (
    <a className={isDarkMode ? "cc-dark" : "cc-light"} href={href}>
      <img
        src={image}
        alt="img"
        style={{ width: width }}
        className={isDarkMode ? "img-dark" : "img-light"}
      />
    </a>
  );
}

export default CardsComponent;
