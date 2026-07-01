import { useEffect, useState } from "react";
import "./EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const [employee, setEmployee] = useState();

  useEffect(() => {
    setTimeout(() => {
      setEmployee({
        id: 101,
        name: "John Doe",
        department: "Engineering",
        experience: "5 Years",
        email: "john.doe@gmail.com",
      });
    }, 2000);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #04 - Cannot Read Properties of Undefined</h3>

        <div className="employee-details">
          <p>
            <strong>Employee ID:</strong> {employee.id}
          </p>

          <p>
            <strong>Name:</strong> {employee.name}
          </p>

          <p>
            <strong>Department:</strong> {employee.department}
          </p>

          <p>
            <strong>Experience:</strong> {employee.experience}
          </p>

          <p>
            <strong>Email:</strong> {employee.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;