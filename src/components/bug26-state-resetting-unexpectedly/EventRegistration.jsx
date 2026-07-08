import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import "./EventRegistration.css";

const EventRegistration = () => {
  const [eventType, setEventType] = useState("React Summit");

  const switchEvent = () => {
    setEventType((prev) =>
      prev === "React Summit"
        ? "JavaScript Conference"
        : "React Summit"
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #26 - State Resetting Unexpectedly</h3>

        <h2>Current Event</h2>

        <h2 style={{color:"black"}}>{eventType}</h2>

        <button
          className="switch-btn"
          onClick={switchEvent}
        >
          Switch Event
        </button>

        <RegistrationForm key={eventType} />
      </div>
    </div>
  );
};

export default EventRegistration;