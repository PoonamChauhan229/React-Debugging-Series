import "./MovieLibrary.css";

const MovieLibrary = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 2,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.7,
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      director: "Anthony & Joe Russo",
      year: 2019,
      rating: 8.4,
    },
  ];

  return (
    <div className="library-container">
      <div className="library-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #05 - React Key Warning</h3>

        <div className="movie-list">
          {movies.map((movie) => (
            <div className="movie-card">
              <h4>{movie.title}</h4>

              <p>
                <strong>Director:</strong> {movie.director}
              </p>

              <p>
                <strong>Year:</strong> {movie.year}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {movie.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLibrary;