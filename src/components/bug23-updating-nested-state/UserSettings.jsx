import { useState } from "react";
import "./UserSettings.css";

const UserSettings = () => {
  const [user, setUser] = useState({
    name: "John Smith",
    address: {
      city: "Mumbai",
      country: "India",
    },
  });
  // Bug
  // const updateCity = () => {
  //   setUser({
  //     ...user,
  //     address: {
  //       city: "Bangalore",
  //     },
  //   });
  // };

  // Fix Bug
  const updateCity = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: "Bangalore",
      },
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #23 - Updating Nested State Incorrectly</h3>

        <div className="details">
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>City:</strong> {user.address.city}
          </p>

          <p>
            <strong>Country:</strong>{" "}
            {user.address.country || "Not Available"}
          </p>
        </div>

        <button
          className="update-btn"
          onClick={updateCity}
        >
          Update City
        </button>

        <p className="note">
          Click the button and observe the country.
        </p>
      </div>
    </div>
  );
};

export default UserSettings;