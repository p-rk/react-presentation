import React from "react";
import { ContentSlide, Step } from "react-presents";

const virtualDOMImg = require("../images/virtual-dom.png");

const slide = () => (
  <div style={{ padding: "8rem" }}>
    <ContentSlide>
      <>
        <h1>What is the Virtual DOM?</h1>
        <Step index={1}>
          <div>
            The virtual DOM (VDOM) is a programming concept where an ideal, or
            “virtual”, representation of a UI is kept in memory and synced with
            the “real” DOM by a library such as ReactDOM. This process is called
            <b> reconciliation</b>
          </div>
        </Step>
      </>
      <br />
      <Step index={2}>
        <img height="50%" width="50%" src={virtualDOMImg} alt="dom" />
      </Step>
      <br />
      <br />
      <Step index={3}>
        <h1>What makes Virtual DOM faster?</h1>
        <p>
          <b>Batch Update</b>
        </p>
        <p>
          React follows a batch update mechanism to update the real DOM. Hence,
          leading to increased performance. This means that updates to the real
          DOM are sent in batches, instead of sending updates for every single
          change in state. The repainting of the UI is the most expensive part,
          and React efficiently ensures that the real DOM receives only batched
          updates to repaint the UI.
        </p>
      </Step>
    </ContentSlide>
  </div>
);

export default slide;
