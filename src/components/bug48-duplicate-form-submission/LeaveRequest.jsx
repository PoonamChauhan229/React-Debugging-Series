import { useState } from "react";
import "./LeaveRequest.css";

const LeaveRequest = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [isSubmitting,setIsSubmitting]=useState(false)

  // Bug:
  // const handleSubmit = () => {
  //   console.log("Leave Request Submitted");

  //   setTimeout(() => {
  //     alert("Leave Request Submitted Successfully");
  //   }, 1000);
  // };

  // Fix Bug:
    const handleSubmit = () => {
      if(isSubmitting) return;
      setIsSubmitting(true);
    console.log("Leave Request Submitted");

    setTimeout(() => {
      alert("Leave Request Submitted Successfully");
      setIsSubmitting(false)
    }, 1000);
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>
          Bug #48 - Duplicate Form Submission
        </h3>

        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />

        {/* 
          Bug:
        <button onClick={handleSubmit}>
          Submit Request
        </button> */}

        <button onClick={handleSubmit}
        disabled={isSubmitting}
        >
          {
            isSubmitting?"Submitting":"Submit Request"
          }
        </button>

      </div>
    </div>
  );
};

export default LeaveRequest;