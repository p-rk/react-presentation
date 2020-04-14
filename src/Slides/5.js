import React from "react";
import { Code, ContentSlide, Step } from "react-presents";

const code = `import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;`;

const dimLines = {
  2: [[1, 30]],
  3: [[3, 30]],
  4: [
    [0, 2],
    [4, 30],
  ],
  5: [
    [0, 5],
    [13, 15],
  ],
  6: [
    [0, 3],
    [5, 6],
    [7, 8],
    [10, 20],
  ],
  7: [
    [0, 4],
    [6, 7],
    [8, 9],
    [11, 15],
  ],
};
const highlightLines = {};

const slide = ({ stepIndex }) => (
  <div style={{ padding: "6rem" }}>
    <ContentSlide>
      <h1>How about hooks ?</h1>
      <Step index={1}>
        <Code
          style={{ fontSize: "20px" }}
          dimLines={dimLines[stepIndex]}
          highlightLines={highlightLines[stepIndex]}
          value={code}
        />
      </Step>
      <ul>
        <Step index={2}>
          <li>Import React</li>
        </Step>
        <Step index={3}>
          <li>Define Simple Function</li>
        </Step>
        <Step index={4}>
          <li>Local State of Component</li>
        </Step>
        <Step index={5}>
          <li>Return JSX (Wrap everytime)</li>
        </Step>
        <Step index={6}>
          <li>Define Increment function</li>
        </Step>
        <Step index={7}>
          <li>Define Decrement function</li>
        </Step>
        <Step index={8}>
          <li>Export the Component</li>
        </Step>
        <Step index={9}>
          <li>That's it</li>
        </Step>
      </ul>
    </ContentSlide>
  </div>
);

export default slide;
