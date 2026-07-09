import { AppointmentContext } from "./AppointmentContext";
import AppointmentSection from "./AppointmentSection";
import "./HospitalApp.css";

const HospitalApp = () => {
  const patientName = "Rahul Sharma";

  return (
    <AppointmentContext.Provider value={patientName}>
      <div className="container">
        <div className="card">

          <h2>React Debugging Series</h2>

          <h3>Bug #34 - Prop Drilling Problems</h3>

          <AppointmentSection/>

        </div>
      </div>
    </AppointmentContext.Provider>

  );
};

export default HospitalApp;