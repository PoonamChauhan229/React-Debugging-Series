import {useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count + 1); 
    setCount((prev)=>prev+1)
    // console.log(count)
  };
 
  useEffect(()=>{
    console.log("Updated count Value",count)
  },[count])

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #01 - State Not Updating</h3>

        <div className="count">{count}</div>

        <button onClick={increaseCount}>
          Increase Count
        </button>

        <p className="note">
          Open the browser console and click the button.
        </p>
      </div>
    </div>
  );
};

export default Counter;