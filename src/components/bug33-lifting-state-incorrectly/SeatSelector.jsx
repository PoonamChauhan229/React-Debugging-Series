import { useState } from "react";

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState(0);

  return (
    <div className="panel">

      <h2>Select Seats</h2>

      <h1>{selectedSeats}</h1>

      <button
        onClick={() =>
          setSelectedSeats(selectedSeats + 1)
        }
      >
        Book Seat
      </button>

    </div>
  );
};

export default SeatSelector;