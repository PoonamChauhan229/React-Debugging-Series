import { useEffect,useState } from "react";

const NotificationCounter = () => {

    const [notifications, setNotifications] = useState(0);
    useEffect(() => {
        console.log("NotificationCounter Mounted");

        const interval = setInterval(() => {
            console.log("Fetching new notifications ,interval is still running in background...");
            setNotifications((prev) => prev + 1);
        }, 1000);
        return ()=>{
            console.log("Cleaning up the interval")
            clearInterval(interval)
        }
    }, []);

    return (
        <div className="notification-card">
            <h4>Live Notifications</h4>

            <div className="center-circle">
                <p className="count">{notifications}</p>
            </div>

            <p className="note">
                Open the browser console and click
                <strong> Hide Notifications</strong>.
            </p>
        </div>
    );
};

export default NotificationCounter