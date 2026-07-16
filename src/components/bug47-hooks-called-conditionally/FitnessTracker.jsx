import { useState } from "react";
import "./FitnessTracker.css";

const FitnessTracker = () => {
  const [showWorkout, setShowWorkout] = useState(false);
  const [workout] = useState("Full Body Workout");

  if (showWorkout) {
    // Bug:
    // const [workout] = useState("Full Body Workout");
    console.log(workout);
  }

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #47 - Hooks Called Conditionally</h3>

        <button
          onClick={() => setShowWorkout(!showWorkout)}
        >
          {showWorkout
            ? "Hide Workout"
            : "Show Workout"}
        </button>
        {showWorkout && <h2>{workout}</h2>}

      </div>
    </div>
  );
};

export default FitnessTracker;