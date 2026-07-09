import { useState } from "react";

const BookingSummary = () => {
  const [selectedSeats] = useState(0);

  return (
    <div className="panel">

      <h2>Booking Summary</h2>

      <h1>{selectedSeats}</h1>

      <p>Total Seats Selected</p>

    </div>
  );
};

export default BookingSummary;