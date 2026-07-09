import { useState } from "react";
import "./HotelBooking.css";

const HotelBooking = () => {
  const [guestName, setGuestName] = useState();

  const loadGuest = () => {
    setGuestName("Rahul Sharma");
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #36 - Switching Between Controlled & Uncontrolled Inputs</h3>

        <label>Guest Name</label>

        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Enter Guest Name"
        />

        <button onClick={loadGuest}>
          Load Guest Details
        </button>

      </div>
    </div>
  );
};

export default HotelBooking;