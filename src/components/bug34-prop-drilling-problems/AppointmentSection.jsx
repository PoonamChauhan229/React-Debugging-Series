import AppointmentDetails from "./AppointmentDetails";

const AppointmentSection = () => {

  console.log("AppointmentSection Render");

  return (
    <div className="box">

      <h2>Appointment Section</h2>

      <AppointmentDetails/>

    </div>
  );
};

export default AppointmentSection;