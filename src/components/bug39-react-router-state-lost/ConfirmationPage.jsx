import { useLocation } from "react-router-dom";
import "./BookingPage.css";

const ConfirmationPage = () => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="card">

        <h2 className="heading">
          Flight Booking Confirmed
        </h2>

        <h3 className="text">
          Passenger :
          {" "}
          {location.state?.passengerName ||
            "No Passenger Data"}
        </h3>

      </div>
    </div>
  );
};

export default ConfirmationPage;