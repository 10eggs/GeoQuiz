import React, { useState, useEffect } from "react";
import Q from "../questions/question";
const Positioning = () => {
  const [counter, setCounter] = useState(1);

  const btnHandler = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("Actual value of the number is: ", counter);
  }, []);

  useEffect(() => {
    console.log("Positioning has been rendered");
  });

  return (
    <>
      <div className="p-box">
        <button className="button" onClick={btnHandler}>
          Click to increase the number
        </button>
        <p style={{ display: "block", alignContent: "center" }}>{counter}</p>
        <div>
          <Q />
        </div>
      </div>
    </>
  );
};

export default Positioning;
