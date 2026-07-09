import { useEffect, useState } from "react";

const PetProfile = () => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    console.log("Fetching pet details...");

    const timer = setTimeout(() => {
      console.log("Pet details received.");

      setPet({
        name: "Buddy",
        breed: "Golden Retriever",
        age: "2 Years",
      });

      console.log("State Updated");
    }, 4000);

    // ❌ Bug:
    // We never cancel this timeout if the component unmounts.
  }, []);

  return (
    <div className="pet-box">
      <h2>🐶 Pet Profile</h2>

      {pet ? (
        <>
          <div className="info-row">
            <span>Name</span>
            <strong>{pet.name}</strong>
          </div>

          <div className="info-row">
            <span>Breed</span>
            <strong>{pet.breed}</strong>
          </div>

          <div className="info-row">
            <span>Age</span>
            <strong>{pet.age}</strong>
          </div>
        </>
      ) : (
        <div className="loading">
          <div className="spinner"></div>

          <p>Loading Pet Details...</p>
        </div>
      )}

      <p className="note">
        Click <b>Hide Pet Profile</b> before 4 seconds.
      </p>
    </div>
  );
};

export default PetProfile;