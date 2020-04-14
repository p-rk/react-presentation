import React from "react";
import { Code, ContentSlide, Step } from "react-presents";

const code = `import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;`;

const dimLines = {
  2: [[1, 30]],
  3: [[3, 30]],
  4: [
    [0, 2],
    [6, 30],
  ],
  5: [
    [0, 15],
    [25, 30],
  ],
  6: [
    [0, 5],
    [11, 19],
    [21, 30],
  ],
  7: [
    [0, 10],
    [16, 20],
    [22, 30],
  ],
  8: [[0, 26]],
};
const highlightLines = {
  2: [[0, 1]],
  3: [[1, 2]],
  4: [[3, 5]],
  5: [
    [18, 18],
    [22, 22],
  ],
};

const slide = ({ stepIndex }) => (
  <div style={{ padding: "6rem" }}>
    <ContentSlide>
      <h1>Simple React Component</h1>
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
          <li>Write class Component</li>
        </Step>
        <Step index={4}>
          <li>Local State of Component</li>
        </Step>
        <Step index={5}>
          <li>Render Method (Wrap everytime)</li>
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
