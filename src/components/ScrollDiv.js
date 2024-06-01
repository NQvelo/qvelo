import React, { useRef, useEffect } from "react";
import "./ScrollDiv.css";

const ScrollDiv = ({ isDarkMode, href }) => {
  return (
    <div class="scroll-container">
      <a className={isDarkMode ? "square-dark" : "square-light"} href={href}>
        <div className="logoImg">
          <img
            src="https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-16-iphone-14-pro-home-screen-crop.png"
            alt="img"
            className={
              isDarkMode ? "scrollable-img-dark" : "scrollable-img-light"
            }
          />
        </div>

        <div className="text-container">
          <h3 className="h3content">lorem ipsum dolar sit.</h3>
          <p className="Pcontent">
            amerlorem ipsum dolar sit. amer lorem ipsum dolar sit. amerlorem
            ipsum dolar sit. amer lorem ipsum dolar sit. amerlorem ipsum dolar
            sit. amer lorem ipsum dolar sit. amerlorem ipsum dolar sit. amer
          </p>
        </div>
      </a>
    </div>
  );
};

export default ScrollDiv;
