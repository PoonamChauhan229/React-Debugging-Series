import { useState } from "react";

const BookingSummary = ({selectedSeats}) => {

  return (
    <div className="panel">

      <h2>Booking Summary</h2>

      <h1>{selectedSeats}</h1>

      <p>Total Seats Selected</p>

    </div>
  );
};

export default BookingSummary;