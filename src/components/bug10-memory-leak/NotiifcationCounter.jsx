import { useEffect } from "react";

const NotificationCounter = ({
    notifications,
    setNotifications,
}) => {
    useEffect(() => {
        console.log("NotificationCounter Mounted");

        const interval = setInterval(() => {
            console.log("Fetching new notifications ,interval is still running...");
            setNotifications((prev) => prev + 1);
        }, 1000);
    }, []);

    return (
        <div className="notification-card">
            <h4>Live Notifications</h4>

            <p className="count">{notifications}</p>

            <p className="note">
                Open the browser console and click
                <strong> Hide Notifications</strong>.
            </p>
        </div>
    );
};

export default NotificationCounter