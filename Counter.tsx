import { Component } from "react";

// Define an interface for the component's state shape
// TypeScript will now enforce that "count" is always a number
interface CounterState {
  count: number;
}

// Since this is a class component with no props, we pass {} for props type
// and CounterState for the state type: Component<PropsType, StateType>
class Counter extends Component<{}, CounterState> {
  // Explicitly type the state property using the CounterState interface
  state: CounterState = {
    count: 0,
  };

  // Type the method as returning void since it doesn't return anything
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;