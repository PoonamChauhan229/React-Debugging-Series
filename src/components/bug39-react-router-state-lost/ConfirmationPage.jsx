import { useLocation } from "react-router-dom";
import "./BookingPage.css";

const ConfirmationPage = () => {
  const location = useLocation();

  const passenger = location.state?.passengerName;

  return (
    <div className="container">
      <div className="card">

        <h2 className="heading">
          Flight Booking Confirmed
        </h2>

        <h3 className="text">
          Passenger:
        </h3>

        <h2 className="heading">
          {passenger || "No Passenger Data"}
        </h2>

        {!passenger && (
          <p className="error">
            This page was opened directly.
            <br />
            Navigation state is unavailable.
          </p>
        )}

      </div>
    </div>
  );
};

export default ConfirmationPage;