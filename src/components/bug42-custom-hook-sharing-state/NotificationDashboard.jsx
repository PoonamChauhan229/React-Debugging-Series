import "./Notification.css";
import NotificationBell from "./NotificationBell";
import NotificationPanel from "./NotificationPanel";

const NotificationDashboard = () => {
  return (
    <div className="container">

      <h1>React Debugging Series</h1>

      <h2>
        Bug #42 - Custom Hook Sharing Unexpected State
      </h2>

      <NotificationBell />

      <NotificationPanel />

    </div>
  );
};

export default NotificationDashboard;