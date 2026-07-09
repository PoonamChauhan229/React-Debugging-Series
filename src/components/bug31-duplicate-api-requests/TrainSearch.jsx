import { useEffect, useState } from "react";
import TrainResults from "./TrainResults";
import "./TrainSearch.css";

const TrainSearch = () => {
  const [search, setSearch] = useState("");
  const [trains, setTrains] = useState([]);

  const fetchTrains = () => {
    console.log("Fetching train schedules...");

    setTimeout(() => {
      console.log("Train schedules received.");
      setTrains([
        {
          id: 1,
          name: "Rajdhani Express",
          time: "07:30 AM",
        },
        {
          id: 2,
          name: "Duronto Express",
          time: "09:15 AM",
        },
      ]);
    }, 1500);
  };

  useEffect(() => {
    if (search.trim() !== "") {
      fetchTrains();
    }
  }, [search]);

   // Bug:
  // const handleSearch = () => {
  //   setSearch("Mumbai to Delhi");   
  //   fetchTrains(); // API call manually
  // };

  // Fix Bug:
    const handleSearch = () => {
    setSearch("Mumbai to Delhi");
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #31 - Duplicate API Requests</h3>

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search Trains
        </button>

        <TrainResults trains={trains} />

      </div>
    </div>
  );
};

export default TrainSearch;