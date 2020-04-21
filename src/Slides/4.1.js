import React from "react";
import { ContentSlide } from "react-presents";

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
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <span style={{ marginRight: "10px" }}></span>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const slide = ({ stepIndex }) => (
  <div style={{ padding: "6rem" }}>
    <ContentSlide>
      <h1>Simple React Component</h1>
      <Counter />
    </ContentSlide>
  </div>
);

export default slide;
