import { useEffect } from "react";
import "./AnalyticsDashboard.css";

const AnalyticsDashboard = () => {
  console.log("AnalyticsDashboard Rendered");

  useEffect(() => {
    console.log("Fetching analytics data...");
  }, []); // run only once

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>React Debugging Series</h2>

        <h3>Bug #09 - StrictMode Double Rendering</h3>

        <div className="stats">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>12,450</p>
          </div>

          <div className="stat-card">
            <h4>Projects</h4>
            <p>128</p>
          </div>

          <div className="stat-card">
            <h4>Revenue</h4>
            <p>$18,750</p>
          </div>
        </div>

        <p className="note">
          Open the browser console and refresh the page.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;