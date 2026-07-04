import { useState } from "react";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Poonam" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" },
  ]);

  const removeStudent = (id) => {
    console.log("Removing student:", id);

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #15 - Event Handler Mistakes</h3>

        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <span>{student.name}</span>

            {/* ❌ Bug */}
            <button onClick={removeStudent(student.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;