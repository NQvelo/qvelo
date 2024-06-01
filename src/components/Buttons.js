import React from "react";
import "./Buttons.css";

function ButtonComp({
  label,
  href,
  backgroundColor,
  borderColor,
  fontColor,
  iconName,
  toggleMode,
  isDarkMode,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: fontColor,
  };

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button
        className={
          isDarkMode ? "button btnSecondary-dark" : "button btnSecondary-light"
        }
      >
        {label}
      </button>
    </a>
  );
}

export default ButtonComp;
