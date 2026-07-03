import { useState } from "react";
import "./ProjectBoard.css";

const ProjectBoard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-Commerce Website",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Portfolio Website",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      status: "In Progress",
    },
  ]);

  const completeProject = (id) => {
    const project = projects.find((project) => project.id === id);

    //Mutating the existing object
    project.status = "Completed";

    console.log("Updated Projects:", projects);

    //Passing the same array reference
    setProjects(projects);
  };

  return (
    <div className="board-container">
      <div className="board-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #11 - State Mutation</h3>

        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div>
              <h4>{project.name}</h4>

              <p>
                Status :
                <strong>
                  {" "}
                  {project.status === "Completed"
                    ? "✅ Completed"
                    : "🟡 In Progress"}
                </strong>
              </p>
            </div>

            {project.status !== "Completed" && (
              <button
                onClick={() => completeProject(project.id)}
              >
                Complete
              </button>
            )}
          </div>
        ))}

        <p className="note">
          Open the browser console and click Complete.
        </p>
      </div>
    </div>
  );
};

export default ProjectBoard;