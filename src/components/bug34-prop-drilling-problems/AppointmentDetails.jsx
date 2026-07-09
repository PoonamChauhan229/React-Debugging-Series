import AppointmentCard from "./AppointmentCard";

const AppointmentDetails = () => {

  console.log("AppointmentDetails Render");

  return (
    <div className="box">

      <h2>Appointment Details</h2>

      <AppointmentCard/>

    </div>
  );
};

export default AppointmentDetails;