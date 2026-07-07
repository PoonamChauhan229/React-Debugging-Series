import { useEffect } from "react";

const EmployeeCard = ({ employee }) => {

  useEffect(() => {

    console.log(`${employee.name} Mounted`);

    return () => {
      console.log(`${employee.name} Unmounted`);
    };

  }, []);

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>

      <p>{employee.role}</p>

      <input
        type="text"
        placeholder="Add Notes..."
      />
    </div>
  );
};

export default EmployeeCard;