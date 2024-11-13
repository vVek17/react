import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card buttonTxt="Hire Me" heading="Hello" arr={[1, 2, 3, 4]} />
      <br />
      <Card buttonTxt="Resume" heading="World" arr={[9, 8, 8]} />
      <br />
      <Card />
    </>
  );
}

export default App;
