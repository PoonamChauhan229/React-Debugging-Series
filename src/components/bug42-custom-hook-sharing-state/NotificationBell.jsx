import useNotifications from "./useNotifications";

const NotificationBell = () => {

  const {
    count,
    addNotification,
  } = useNotifications();

  return (
    <div className="card">

      <h3>Notification Bell</h3>

      <h2>🔔 {count}</h2>

      <button onClick={addNotification}>
        Add Notification
      </button>

    </div>
  );
};

export default NotificationBell;