import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const [passengerName, setPassengerName] = useState("");

  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/confirmation", {
      state: {
        passengerName,
      },
    });
  };

  return (
    <div className="container">
      <div className="card">

        <h2 className="heading">
          React Debugging Series
        </h2>

        <h3 className="subHeading">
          Bug #39 - React Router State Lost on Refresh
        </h3>

        <label className="label">
          Passenger Name
        </label>

        <input
          className="input"
          type="text"
          placeholder="Enter Passenger Name"
          value={passengerName}
          onChange={(e) =>
            setPassengerName(e.target.value)
          }
        />

        <button
          className="button"
          onClick={handleBooking}
        >
          Proceed to Confirmation
        </button>

      </div>
    </div>
  );
};

export default BookingPage;