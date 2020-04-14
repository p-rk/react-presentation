import React from "react";
import { ContentSlide, Step } from "react-presents";

const slide = () => (
  <div style={{ padding: "8rem" }}>
    <ContentSlide>
      <h1>LifeCycles for Class Components</h1>
      <p>
        These methods are called in the following order when an instance of a
        component is being created and inserted into the DOM:
      </p>
      <ul>
        <Step index={1}>
          <li>constructor()</li>
        </Step>
        <Step index={2}>
          <li>static getDerivedStateFromProps()</li>
        </Step>
        <Step index={3}>
          <li>render()</li>
        </Step>
        <Step index={4}>
          <li>componentDidMount()</li>
        </Step>
      </ul>
    </ContentSlide>
  </div>
);

slide.title = "A simple slide";

export default slide;
