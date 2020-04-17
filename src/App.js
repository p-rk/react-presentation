import React from "react";
import { Presentation, PresenterModePlugin, Slide } from "react-presents";
import "./App.css";

// Automatically load all slides in the Slides folder
const slides = require
  .context("./Slides/", false, /\.js$/)
  .keys()
  .map((filename) => filename.replace("./", ""))
  .map((filename) => require(`./Slides/${filename}`).default);

export default () => (
  <Presentation>
    <PresenterModePlugin />

    {slides.map((Component, index) => (
      <Slide component={Component} key={index} />
    ))}
  </Presentation>
);
