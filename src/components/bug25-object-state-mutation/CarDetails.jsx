import { useState } from "react";
import "./CarDetails.css";

const CarDetails = () => {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Fortuner",
    color: "White",
  });

  // Bug:
  // const changeColor = () => {
  //   car.color = "Black";
  //   console.log("Updated Object :", car);
  //   setCar(car);
  // };

  // Fix Bug:
    const changeColor = () => {
    setCar((prev)=>(
      {...prev,color:"Black"}
    ));
  };

  

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #25 - Mutating Object State Directly</h3>

        <div className="details">
          <p>
            <strong>Brand :</strong> {car.brand}
          </p>

          <p>
            <strong>Model :</strong> {car.model}
          </p>

          <p>
            <strong>Color :</strong> {car.color}
          </p>
        </div>

        <button
          className="update-btn"
          onClick={changeColor}
        >
          Change Color
        </button>

        <p className="note">
          Open the browser console and click the button.
        </p>
      </div>
    </div>
  );
};

export default CarDetails;