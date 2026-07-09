import { useContext } from "react";
import { AppointmentContext } from "./AppointmentContext";

const AppointmentCard = () => {
const patientName=useContext(AppointmentContext)

  console.log("AppointmentCard Render",patientName);

  return (
    <div className="appointment">

      <h2>Appointment Confirmed</h2>

      <h3>Patient : {patientName}</h3>

      <p>Doctor : Dr. Mehta</p>

      <p>Time : 11:30 AM</p>

    </div>
  );
};

export default AppointmentCard;