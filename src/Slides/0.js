import React from "react";
import { TitleSlide } from "react-presents";

import logo from "../logo.svg";

const slide = () => (
  <TitleSlide>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>
      Introduction to <span style={{ color: "#61dafb" }}>React</span>
    </h1>
  </TitleSlide>
);

export default slide;
