import React, { useEffect, useState } from "react";
const Random = () => {
  const [typecolor, settypecolor] = useState("hex");
  const [color, setcolor] = useState("#000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handelCreatedhexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  };

  const handelCreatedRandomColor = () => {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    setcolor(`rgb(${r},${g}, ${b})`);
  };

  useEffect(() => {
    if (typecolor === "rgb") handelCreatedRandomColor();
    else handelCreatedhexColor();
    // console.log("use");
  }, [typecolor]);
//    console.log("use outside");
  const handleRandomColorButtonClick = () => {
    // Execute the appropriate function based on the current color type
    if (typecolor === "hex") {
      handelCreatedRandomColor();
    } else {
      handelCreatedhexColor();
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => settypecolor("hex")}>Created HEX color</button>
      <button onClick={() => settypecolor("rgb")}>Created RGB Color</button>
      <button onClick={handleRandomColorButtonClick}>Created Random color</button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typecolor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Random;
