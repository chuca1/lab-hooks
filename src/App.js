import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [counter, setcounter] = useState(0);

  function increment() {
    setcounter(prevState => counter + 1);
  }
  function decrement() {
    setcounter(prevState => counter - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
      </header>
    </div>
  );
}

export default App;
