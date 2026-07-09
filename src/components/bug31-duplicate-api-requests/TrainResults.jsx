const TrainResults = ({ trains }) => {
  return (
    <div className="results">

      <h2>Available Trains</h2>

      {trains.length === 0 ? (
        <p>No trains loaded.</p>
      ) : (
        trains.map((train) => (
          <div
            key={train.id}
            className="train-card"
          >
            <h4>{train.name}</h4>

            <p>Departure : {train.time}</p>
          </div>
        ))
      )}

    </div>
  );
};

export default TrainResults;