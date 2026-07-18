import { useState } from "react";
import "./CourierPickup.css";

const CourierPickup = () => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({
    customerName: "",
    address: "",
  });

  const handleSubmit = () => {
    let newErrors = {
      customerName: "",
      address: "",
    };

    let isValid = true;

    if (customerName.trim() === "") {
      newErrors.customerName = "Customer Name is required.";
      isValid = false;
    }

    if (address.trim() === "") {
      newErrors.address = "Pickup Address is required.";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    alert("Courier Pickup Scheduled");
  };

  const handleReset = () => {
    setCustomerName("");
    setAddress("");
    setErrors({
      customerName: "",
      address: "",
    })
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #50 - Reset Doesn't Clear Errors</h3>

        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        {errors.customerName && (
          <p className="error">{errors.customerName}</p>
        )}

        <input
          type="text"
          placeholder="Pickup Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {errors.address && (
          <p className="error">{errors.address}</p>
        )}

        <div className="buttons">

          <button onClick={handleSubmit}>
            Schedule Pickup
          </button>

          <button
            className="reset"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
};

export default CourierPickup;