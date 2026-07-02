import { useState } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      status: "Completed",
    },
    {
      id: 2,
      title: "Build a Todo App",
      status: "In Progress",
    },
  ]);

  const addTask = () => {
    // Mutating the original state
    tasks.push({
      id: 3,
      title: "Practice Debugging",
      status: "Pending",
    });

    // Same array reference
    setTasks(tasks);
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #07 - Component Not Re-rendering</h3>

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <h4>{task.title}</h4>

              <p>
                <strong>Status:</strong> {task.status}
              </p>
            </div>
          ))}
        </div>

        <button onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskManager;