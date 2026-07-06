import React from "react";

const PatientSummary = React.memo(() => {
  console.log("PatientSummary Rendered");

  return (
    <div className="box">
      <h3>🛏️ Patient Summary</h3>

      <p>Total Patients : 120</p>

      <p>Admitted Today : 8</p>
    </div>
  );
});

export default PatientSummary;