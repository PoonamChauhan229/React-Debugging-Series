import { useState } from "react";
import UserCard from "./UserCard";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "Amit Shah",
    role: "Frontend Developer",
    experience: "2 Years",
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #08 - UI Not Updating After Mutating Props</h3>

        <UserCard user={user} setUser={setUser}/>
      </div>
    </div>
  );
};

export default UserDashboard;