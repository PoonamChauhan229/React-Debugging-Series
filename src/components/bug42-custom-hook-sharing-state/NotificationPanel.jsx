import useNotifications from "./useNotifications";

const NotificationPanel = () => {

  const { count } = useNotifications();

  return (
    <div className="card">

      <h3>Notification Panel</h3>

      <h2>Total Notifications</h2>

      <p>{count}</p>

    </div>
  );
};

export default NotificationPanel;