import AppointmentSection from "./AppointmentSection";
import "./HospitalApp.css";

const HospitalApp = () => {
  const patientName = "Rahul Sharma";

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #34 - Prop Drilling Problems</h3>

        <AppointmentSection
          patientName={patientName}
        />

      </div>
    </div>
  );
};

export default HospitalApp;