import { useMemo, useState } from "react";
import HospitalContext from "./HospitalContext";
import DoctorProfile from "./DoctorProfile";
import PatientSummary from "./PatientSummary";
import "./HospitalDashboard.css";

const HospitalDashboard = () => {
  const [doctor] = useState("Dr. John");
  const [department] = useState("Cardiology");
  const [refreshCount, setRefreshCount] = useState(0);

  // Bug:
  // const doctorData = {
  //   doctor,
  //   department,
  // };

  // Fix Bug:
  const doctorData=useMemo(()=>{
    return{doctor,department}

  },[doctor,department])

  return (
    <HospitalContext.Provider value={doctorData}>
      <div className="container">
        <div className="card">
          <h2>React Debugging Series</h2>

          <h3>Bug #19 - Context Value Not Memoized</h3>

          <h2>Dashboard Refreshes : {refreshCount}</h2>

          <button
            className="refresh-btn"
            onClick={() => setRefreshCount(refreshCount + 1)}
          >
            Refresh Dashboard
          </button>

          <DoctorProfile />

          <PatientSummary />

          <h5 className="note">
            Open the browser console and watch.
          </h5>
        </div>
      </div>
    </HospitalContext.Provider>
  );
};

export default HospitalDashboard;