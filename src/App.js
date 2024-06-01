import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import ButtonComp from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import myImage from "../src/assets/Image.png";
import sm from "../src/assets/sm.png";
import ba from "../src/assets/ba-tr3.png";
import alikuri from "../src/assets/alikuri.png";
import mss from "../src/assets/mss.svg";

import Header from "./components/Header";
import { Helmet } from "react-helmet";
import Cbox from "./components/Cbox";
import FooterDivComponent from "./components/FooterDiv";
import DarkModeToggle from "./components/DarkModeToggle";
import ScrollDiv from "./components/ScrollDiv";

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="mainScreen">
      <DarkModeToggle toggleMode={toggleMode} isDarkMode={isDarkMode} />
      {/* <Header /> */}

      <Helmet>
        <meta charSet="utf-8" />
        <title>Nick Qvelidze - Portfolio </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="container welcome-margin-top">
        <div className="Divheader">
          <img src={myImage} alt="me" className="meMac" />
          {/* <DarkModeToggle toggleMode={toggleMode} isDarkMode={isDarkMode} /> */}
        </div>
        <h1> Hey! Welcome To My Page</h1>
        <p>
          Dive into my portfolio, where artistic passions come alive. Explore a
          fusion of creativity, skill, and imagination, woven into a tapestry of
          visual stories and innovative designs. Welcome!
        </p>
        <div className="buttonclass">
          <ButtonComp
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            label={"Linkedin"}
            backgroundColor={"white"}
            borderColor={"transparent"}
            fontColor={"black"}
            href="https://www.linkedin.com/in/nikolozqvelidze/"
          />
          <ButtonComp
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            label={"Instagram"}
            backgroundColor={"transparent"}
            borderColor={"white"}
            fontColor={"white"}
            href="https://instagram.com/qvelo_"
          />
          <ButtonComp
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            label={"Facebook"}
            backgroundColor={"transparent"}
            borderColor={"white"}
            fontColor={"white"}
            href="https://www.facebook.com/Nick.Qvelo/"
          />
          <ButtonComp
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            label={"Dribbble"}
            backgroundColor={"transparent"}
            borderColor={"white"}
            fontColor={"white"}
            href="https://dribbble.com/Qvelo"
          />
        </div>
      </div>
      <div className="container section-margin-top">
        <div class="col texts aboutme-text">
          <h1>About Me</h1>
          <p>
            Dive into my portfolio, where artistic passions come alive. Explore
            a fusion of creativity, skill, and imagination, woven into a
            tapestry of visual stories and innovative designs. Welcome!Dive into
            my portfolio, where artistic passions come alive.
          </p>
        </div>
      </div>
      <div className="container section-margin-top">
        <div class="col texts title-description">
          <h1>My Startups</h1>
          <p>
            I have experience of working with large companies as well as
            partnering with design studios
          </p>
        </div>

        <div className="grid-container">
          <Cards
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            image={sm}
            width={"60%"}
            href={"https://www.facebook.com/saxalisomath"}
          />
          <Cards
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            image={ba}
            width={"55%"}
            href={"https://www.facebook.com/BetaAcademyGeorgia"}
          />
          <Cards
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            image={alikuri}
            width={"75%"}
            href={"https://www.facebook.com/alikurigame"}
          />
        </div>
      </div>
      <div className="container section-margin-top">
        <div class="col texts title-description">
          <h1>Work Experience</h1>
          <p>
            I have experience of working with large companies as well as
            partnering with design studios
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "500px",
          }}
        >
          <Cbox
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            title={"React Native Developer"}
            text={
              "I was working 1+ year as a React Native developer in Sweeft - Making Science"
            }
            image={mss}
          />

          <Cbox
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
            title={"Flutter Developer"}
            text={
              "I was working as a Flutter developer in Sweeft - Making Science"
            }
            image={mss}
          />
        </div>
        <div className="container section-margin-top">
          <div class="col texts title-description">
            <h1>Projects</h1>
            <p>
              I have experience of working with large companies as well as
              partnering with design studios
            </p>
          </div>
        </div>
        <ScrollDiv toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <FooterDivComponent toggleMode={toggleMode} isDarkMode={isDarkMode} />
      </div>

      {/* <BottomNavBar /> */}
    </div>
  );
}

export default Main;
