import React from "react";
import { Presentation, PresenterModePlugin, Slide } from "react-presents";
import "./App.css";

// Automatically load all slides in the Slides folder
const slides = require
  .context("./Slides/", false, /\.js$/)
  .keys()
  .map((filename) => filename.replace("./", ""))
  .map((filename) => require(`./Slides/${filename}`).default);

// Support navigating to any slides also tagged with a :title
const options = slides
  .map((slide, index) => ({
    label: slide.title,
    value: index,
  }))
  .filter((option) => option.label);

export default () => (
  <Presentation>
    <PresenterModePlugin />

    {slides.map((Component, index) => (
      <Slide component={Component} key={index} />
    ))}
  </Presentation>
);
