import AppointmentDetails from "./AppointmentDetails";

const AppointmentSection = ({ patientName }) => {

  console.log("AppointmentSection Render");

  return (
    <div className="box">

      <h2>Appointment Section</h2>

      <AppointmentDetails
        patientName={patientName}
      />

    </div>
  );
};

export default AppointmentSection;