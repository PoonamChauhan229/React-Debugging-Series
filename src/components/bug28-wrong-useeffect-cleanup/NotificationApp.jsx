import { useState } from "react";
import NotificationCenter from "./NotificationCenter";
import "./NotificationApp.css";

const NotificationApp = () => {
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #28 - Wrong useEffect Cleanup</h3>

        <button
          className="toggle-btn"
          onClick={() =>
            setShowNotifications(!showNotifications)
          }
        >
          {showNotifications
            ? "Hide Notifications"
            : "Show Notifications"}
        </button>

        {showNotifications && <NotificationCenter />}

      </div>
    </div>
  );
};

export default NotificationApp;