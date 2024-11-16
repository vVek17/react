import React from "react";

function Button({ buttonName = "Color", color = "black", setColor }) {
  // function changeBackgroundColor() {
  //   setColor(color);
  // }
  return (
    <>
      <button
        className="rounded-lg size-toggle px-2 py-1 border border-solid border-gray-500"
        onClick={() => setColor(color)}
      >
        {buttonName}
      </button>
    </>
  );
}

export default Button;
