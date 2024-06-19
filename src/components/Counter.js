import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemsContext";


const Counter = () => {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  const style = theme === "light" ? "light" : "dark";
  const button = theme === "light" ? "light-button" : "dark-button";

  return (
    <div
      className={`${style}  main-container`}
   
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1>Counter: {count}</h1>
        <button className={button} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className={button} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
