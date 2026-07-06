import { useContext } from "react";
import HospitalContext from "./HospitalContext";
import React from "react";

const DoctorProfile = React.memo(() => {
  console.log("DoctorProfile Rendered");

  const { doctor, department } = useContext(HospitalContext);

  return (
    <div className="box">
      <h3>👨‍⚕️ Doctor Profile</h3>

      <p>Name : {doctor}</p>

      <p>Department : {department}</p>
    </div>
  );
});

export default DoctorProfile;