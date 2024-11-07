import React, { useState } from "react";
import "./RandomColor.css";
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const style = {
    width: "100vw",
    height: "100vh",
    backgroundColor: color,
  };

  const handleCreateHexColor = () => {
    let hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * hexArray.length);
      hexColor += hexArray[val];
    }
    setColor(hexColor);
  };
  const handleCreateRgbColor = () => {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);

    let rgb = `rgb(${first}, ${second}, ${third})`;
    setColor(rgb);
  };

  return (
    <div style={style} className="randomColor">
      <button
        onClick={
          typeOfColor == "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Create RGB color
      </button>
    </div>
  );
};

export default RandomColor;
