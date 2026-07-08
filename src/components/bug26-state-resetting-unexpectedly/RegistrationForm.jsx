import { useEffect, useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Registration Form Mounted");

    return () => {
      console.log("Registration Form Unmounted");
    };
  }, []);

  return (
    <div className="form">

      <h2>Participant Details</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>
        Participant :
        {name || " Not Entered"}
      </h3>

    </div>
  );
};

export default RegistrationForm;