import { useEffect, useState } from "react";
import "./MovieSearch.css";

const MovieSearch = () => {
  const [movie, setMovie] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!movie) return;

    // Simulate different API response times
    const delay = Math.random() * 3000 + 500;

    console.log(`Request Sent : ${movie}`);

    setTimeout(() => {
      console.log(`Response Received : ${movie}`);

      setResult(movie);
    }, delay);
  }, [movie]);

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #21 - Race Condition in API Calls</h3>

        <input
          type="text"
          placeholder="Search Movie..."
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <h2>Result</h2>

        <div className="result">
          {result || "No movie searched"}
        </div>

        <p className="note">
          Type quickly and watch the browser console.
        </p>
      </div>
    </div>
  );
};

export default MovieSearch;