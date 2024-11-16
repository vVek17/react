import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // this wont work because the counter is a normal variable
  // let counter = 10;

  //as react handels the UI part, the variable should be created using react's library
  //so the variable is constantly reflected in the UI
  let [counter, setCounter] = useState(10);

  function increase() {
    if (counter < 20) setCounter(counter + 1);
  }
  function decrease() {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter🔄</h1>
      <h2>Current value is : {counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
