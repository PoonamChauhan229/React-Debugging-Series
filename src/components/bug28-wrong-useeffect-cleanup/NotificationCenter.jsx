import { useEffect, useState } from "react";

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {

    console.log("Polling Started");

    const interval = setInterval(() => {

      console.log("Checking for new notifications...");

      setNotifications((prev) => prev + 1);

    }, 2000);

  }, []);

  return (
    <div className="notification-box">

      <h2>Notification Center</h2>

      <h1>{notifications}</h1>

      <p>
        New Notifications
      </p>

    </div>
  );
};

export default NotificationCenter;