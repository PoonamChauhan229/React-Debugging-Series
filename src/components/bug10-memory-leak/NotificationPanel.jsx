import { useEffect, useState } from "react";
import "./NotificationPanel.css";
import NotificationCounter from "./NotiifcationCounter";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(0);
  const [showPanel, setShowPanel] = useState(true);

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #10 - Memory Leak</h3>

        <button
          className="toggle-btn"
          onClick={() => setShowPanel(!showPanel)}
        >
          {showPanel ? "Hide Notifications" : "Show Notifications"}
        </button>

        {showPanel && (
          <NotificationCounter
            notifications={notifications}
            setNotifications={setNotifications}
          />
        )}
      </div>
    </div>
  );
};

<NotificationCounter/>

export default NotificationPanel;