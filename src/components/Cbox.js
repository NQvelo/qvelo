import React from "react";
import "./Cbox.css";

function ContainerComponent({
  image,
  href,
  title,
  text,
  toggleMode,
  isDarkMode,
}) {
  return (
    <a className={isDarkMode ? "contComp-dark" : "contComp-light"} href={href}>
      <img
        src={image}
        alt="img"
        className={isDarkMode ? "a-img-dark" : "a-img-light"}
      />
      <h1>{title}</h1>
      <p>{text}</p>
    </a>
  );
}

export default ContainerComponent;
