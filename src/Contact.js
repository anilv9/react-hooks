import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("john");
  const [number, setNum] = useState(0);
  const handleClick = (e) => {
    // console.log("you clicked me re ??", "event obj: ", e);
    setName("smith");
    setNum(number + 1);
  };
  const handleDec = () => {
    setNum(number - 1);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{number}</h2>
      <button onClick={handleClick}>Click me!!</button>
      <button onClick={handleDec}>--</button>
    </div>
  );
}
