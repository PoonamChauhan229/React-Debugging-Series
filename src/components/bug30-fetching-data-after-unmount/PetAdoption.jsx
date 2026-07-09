import { useState } from "react";
import PetProfile from "./PetProfile";
import "./PetAdoption.css";

const PetAdoption = () => {
  const [showPet, setShowPet] = useState(true);

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #30 - Fetching Data After Unmount</h3>

        <button
          className="toggle-btn"
          onClick={() => setShowPet(!showPet)}
        >
          {showPet ? "Hide Pet Profile" : "View Pet Profile"}
        </button>

        {showPet && <PetProfile />}
      </div>
    </div>
  );
};

export default PetAdoption;