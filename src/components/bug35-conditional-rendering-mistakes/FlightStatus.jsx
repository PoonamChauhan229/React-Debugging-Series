import { useState } from "react";
import "./FlightStatus.css";

const FlightStatus = () => {
  const [flight, setFlight] = useState({
    flightNo: "AI-302",
    destination: "Delhi",
    status: "On Time",
    delayMinutes: 0,
  });

  const delayFlight = () => {
    setFlight({
      ...flight,
      status: "Delayed",
      delayMinutes: 45,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #35 - Conditional Rendering Mistakes</h3>

        <div className="flight-card">
          <div className="row">
            <span>Flight</span>
            <strong>{flight.flightNo}</strong>
          </div>

          <div className="row">
            <span>Destination</span>
            <strong>{flight.destination}</strong>
          </div>

          <div className="row">
            <span>Status</span>
            <strong
              className={
                flight.status === "Delayed"
                  ? "delay"
                  : "ontime"
              }
            >
              {flight.status}
            </strong>
          </div>

          {/* BUG */}

          <div className="row">
            <span>Estimated Delay</span>

            {flight.delayMinutes && (
              <strong>
                {flight.delayMinutes} Minutes
              </strong>
            )}
          </div>
        </div>

        <button onClick={delayFlight}>
          Delay Flight
        </button>
      </div>
    </div>
  );
};

export default FlightStatus;