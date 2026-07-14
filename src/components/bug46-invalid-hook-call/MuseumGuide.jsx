import { useState } from "react";
import "./MuseumGuide.css";

const MuseumGuide = () => {

  const showExhibit = () => {

    // ❌ Invalid Hook Call
    const [exhibit] = useState("Ancient Egypt");

    alert(`Current Exhibit: ${exhibit}`);
  };

  return (
    <div className="container">

      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #46 - Invalid Hook Call
        </h3>

        <button onClick={showExhibit}>
          View Exhibit
        </button>

      </div>

    </div>
  );
};

export default MuseumGuide;