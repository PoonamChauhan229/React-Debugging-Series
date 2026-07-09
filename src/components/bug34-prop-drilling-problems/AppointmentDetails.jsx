import AppointmentCard from "./AppointmentCard";

const AppointmentDetails = ({ patientName }) => {

  console.log("AppointmentDetails Render");

  return (
    <div className="box">

      <h2>Appointment Details</h2>

      <AppointmentCard
        patientName={patientName}
      />

    </div>
  );
};

export default AppointmentDetails;