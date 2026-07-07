import { useEffect, useState } from "react";
import "./BookSearch.css";

const BookSearch = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") return;

    console.log("API Called:", search);
  }, [search]);


  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #20 - Debouncing Mistakes</h3>

        <input
          type="text"
          placeholder="Search Books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p className="info">
          Type quickly and open the browser console.
        </p>
      </div>
    </div>
  );
};

export default BookSearch;