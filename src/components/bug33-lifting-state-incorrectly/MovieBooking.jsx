import SeatSelector from "./SeatSelector";
import BookingSummary from "./BookingSummary";
import "./MovieBooking.css";
import { useState } from "react";

const MovieBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState(0);
  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #33 - Lifting State Incorrectly</h3>

        <div className="layout">

          <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>

          <BookingSummary selectedSeats={selectedSeats}/>

        </div>

      </div>
    </div>
  );
};

export default MovieBooking;