import React, { useState, useMemo,useContext } from "react";
import { ThemeContext } from "./ThemsContext";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const { theme } = useContext(ThemeContext);

  const style = theme === "light" ? "light" : "dark";


 
  const CalculateCount = (num) => {
   
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const memoizedValue = useMemo(() => CalculateCount(count), [count]);

  return (
    <div className={`main-container ${style}`}>
      <div>
        <h1>useMemo Example</h1>
        <p>Counter: {count}</p>
        <p>Expensive Calculation Result: {memoizedValue}</p>
        <button onClick={() => setCount(count + 1)} className="button">
          Increment
        </button>
        <br />
        <br />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="input-field"
        />
        <p>Input Value: {inputValue}</p>
      </div>
    </div>
  );
}

export default UseMemoHook;
