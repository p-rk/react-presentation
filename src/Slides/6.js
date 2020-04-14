import React from "react";
import { ContentSlide, Step, Code } from "react-presents";

const useEffect = `useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [dependency])`;

const slide = () => (
  <div style={{ padding: "8rem" }}>
    <ContentSlide>
      <h1>Lifecycles in Hooks</h1>
      <ul>
        <Step index={1}>
          <li>useEffect() ~ when component mounts</li>
        </Step>
        <Step index={2}>
          <li>useEffect() ~ when component updates</li>
        </Step>
        <Step index={3}>
          <li>useEffect() ~ when component unmounts</li>
        </Step>
      </ul>
      <Step index={4}>
        <p>Yes! thats right for every life cycle useEffect works :)</p>
      </Step>
      <Step index={5}>
        <Code value={useEffect} />
      </Step>
    </ContentSlide>
  </div>
);

export default slide;
