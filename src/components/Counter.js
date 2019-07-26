import React from "react";

const Counter = props => {
  return (
    <div>
      <h2>counter {props.counter}</h2>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
};

export default Counter;
