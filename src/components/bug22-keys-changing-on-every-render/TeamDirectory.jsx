import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import "./TeamDirectory.css";

const TeamDirectory = () => {
  const [refresh, setRefresh] = useState(0);

  const employees = [
    { id: 1, name: "John Smith", role: "Frontend Developer" },
    { id: 2, name: "Sarah Wilson", role: "Backend Developer" },
    { id: 3, name: "David Lee", role: "UI Designer" },
  ];

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #22 - Keys Changing on Every Render</h3>

        <button
          className="refresh-btn"
          onClick={() => setRefresh(refresh + 1)}
        >
          Refresh Dashboard ({refresh})
        </button>

        <div className="employee-list">
          {employees.map((employee) => (
            <EmployeeCard
              key={Math.random()}  
              employee={employee}
            />
          ))}
        </div>

        <p className="note">
          Open the browser console and click Refresh Dashboard.
        </p>
      </div>
    </div>
  );
};

export default TeamDirectory;