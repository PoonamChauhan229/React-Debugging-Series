import { useState } from "react";

const SeatSelector = ({selectedSeats,setSelectedSeats}) => {

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