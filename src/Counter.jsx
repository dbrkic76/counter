import React, { useState } from "react";
import "./Counter.css"

export const Counter = ({startValue, increment, maxValue}) => {
    const [counter, setCounter] = useState(startValue)
    const isEven = counter % 2 ===0 ? "even" : "odd"
    let isNearEnd
    if (counter === startValue) {isNearEnd = "Lets'Start"} else if (counter > startValue && counter < 90) {isNearEnd = "Keep Going"} else if (counter >= 90 && counter < 100) {isNearEnd = "Almost There"} else if (counter === maxValue) {isNearEnd = "YOU MADE IT!!!"}
  return (
    <div>
      <h1>{counter}</h1>
      <p>{isEven}</p>
      <button onClick={() => {setCounter(counter - increment)}}>-</button>
      <button onClick={() => {if (counter + increment <= maxValue) {setCounter(counter + increment)} else { setCounter(counter)}}}>+</button>
      <h1 className={counter === maxValue ? "success" : ""}>{isNearEnd}</h1>
    </div>
  );
};
