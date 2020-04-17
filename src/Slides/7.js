import React from "react";
import { ContentSlide } from "react-presents";

const reactDOC = require("../images/class-confuse.png");

const slide = () => (
  <div style={{ padding: "8rem" }}>
    <ContentSlide>
      <h1>Why Hooks other than Classes?</h1>
      <img src={reactDOC} alt="" height="50%" width="70%" />
    </ContentSlide>
  </div>
);

export default slide;
