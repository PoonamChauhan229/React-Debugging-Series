import { useRef, useState } from "react";
import "./VisitorCounter.css";

const VisitorCounter = () => {
  const visitorCount = useRef(0);

  const increaseVisitor = () => {
    visitorCount.current++;

    console.log("Current Visitors :", visitorCount.current);
  
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #27 - useRef Doesn't Re-render UI</h3>

        <div className="counter-box">
          <h2>Total Visitors</h2>

          <h1>{visitorCount.current}</h1>
        </div>

        <button
          className="visit-btn"
          onClick={increaseVisitor}
        >
          New Visitor
        </button>

        <p className="note">
          Open the browser console and click the button.
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;