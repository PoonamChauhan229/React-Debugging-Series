import SeatSelector from "./SeatSelector";
import BookingSummary from "./BookingSummary";
import "./MovieBooking.css";

const MovieBooking = () => {
  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #33 - Lifting State Incorrectly</h3>

        <div className="layout">

          <SeatSelector />

          <BookingSummary />

        </div>

      </div>
    </div>
  );
};

export default MovieBooking;