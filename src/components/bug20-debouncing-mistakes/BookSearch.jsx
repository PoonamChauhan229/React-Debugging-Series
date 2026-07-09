import { useEffect, useState } from "react";
import "./BookSearch.css";

const BookSearch = () => {
  const [search, setSearch] = useState("");

  // Bug:
  // useEffect(() => {
  //   if (search === "") return;

  //   console.log("API Called:", search);
  // }, [search]);

  // Fix Bug:
   useEffect(() => {
    if (search === "") return;
    //setimeout
    const timer=setTimeout(()=>{
      console.log("API Called:", search); // API call
    },500)

    return ()=>clearTimeout(timer)

    
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