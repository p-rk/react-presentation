import React from "react";
import { ContentSlide, Step } from "react-presents";

// Advantages of React
// Here, are pros/benefits of using React:

const slide = () => (
  <div style={{ padding: "8rem" }}>
    <ContentSlide>
      <h1>Advantages of React</h1>
      <Step index={1}>
        <ul>
          <li>Easy to learn because of its simple Design</li>
          <li>
            The HTML-like syntax for which allows templating, and highly
            detailed documentation.
          </li>
          <li>
            Developers can spend more time writing modern JavaScript, and less
            time worrying about the framework-specific code.
          </li>
          <li>
            Enhance support for server-side rendering, making it a robust
            framework for content-focused applications.
          </li>
          <li>Migrating between versions is in React.</li>
          <li>
            Facebook offers "codemod" feature to automate much of the process.
          </li>
          <li>Skills learned in React can be applied to Native development.</li>
          <li>
            When you combine with ES6/7, ReactJS is perfect for managing heavy
            loads with relative ease.
          </li>
        </ul>
      </Step>
      <br />
      <Step index={2}>
        <h1>Disadvantages</h1>
        <ul>
          <li>
            Integrating Reacts in the traditional MVC framework like Rail
            requires complex configuration.
          </li>
          <li>
            ReactJS would require the users to have in-depth knowledge with
            respect to the integration of user interface into M VC framework.
          </li>
        </ul>
      </Step>
    </ContentSlide>
  </div>
);

slide.title = "A simple slide";

export default slide;
