import { React, useState } from "react";
import Button from "./components/Button.jsx";

function App() {
  const [bgColor, setColor] = useState("darkgreen");
  return (
    <div
      className="w-full h-screen flex gap-6 justify-center items-center font-extralight"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-6xl mb-20">Background Color Changer</h1>
      <div className="fixed flex flex-wrap justify-center  gap-8 mt-20 snap-center ">
        <Button buttonName="Purple" color="#662d91" setColor={setColor} />
        <Button buttonName="Orange" color="orange" setColor={setColor} />
        <Button buttonName="Blue" color="#5072A7" setColor={setColor} />
        <Button buttonName="Green" color="#018749" setColor={setColor} />
        <Button buttonName="Brown" color="brown" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
