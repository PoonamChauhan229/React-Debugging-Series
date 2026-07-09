import { useMemo, useState } from "react";
import "./EmployeeDirectory.css";

const EmployeeDirectory = () => {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "Poonam",
      department: "HR",
    },
    {
      id: 2,
      name: "Rahul",
      department: "IT",
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance",
    },
    {
      id: 4,
      name: "Amit",
      department: "IT",
    },
  ];

  // Bug:
  //  const filteredEmployees = useMemo(() => {
  //   console.log("Filtering Employees...");

  //   return employees.filter((employee) =>
  //     employee.department
  //       .toLowerCase()
  //       .includes(search.toLowerCase())
  //   );
  // }, []);

  // Fix Bug:
     const filteredEmployees = useMemo(() => {
    console.log("Filtering Employees...");

    return employees.filter((employee) =>
      employee.department
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [employees,search]);


  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #17 - useMemo Mistakes</h3>

        <input
          type="text"
          placeholder="Search by department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="employee-list">
          {filteredEmployees.map((employee) => (
            <div className="employee-card" key={employee.id}>
              <h4>{employee.name}</h4>
              <p>{employee.department}</p>
            </div>
          ))}
        </div>

        <p className="note">
          Try searching for <strong>IT</strong>.
        </p>
      </div>
    </div>
  );
};

export default EmployeeDirectory;