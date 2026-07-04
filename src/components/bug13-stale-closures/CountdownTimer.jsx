import { useEffect, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Count:", count);

      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #13 - Stale Closures</h3>

        <div className="count">{count}</div>

        <p className="note">
          Open the browser console and watch the countdown.
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;