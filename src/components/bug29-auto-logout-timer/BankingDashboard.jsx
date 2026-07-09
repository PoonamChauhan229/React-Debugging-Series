import { useEffect, useRef, useState } from "react";
import "./BankingDashboard.css";

const BankingDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const timerRef=useRef(null)

  useEffect(() => {
    startLogoutTimer();
    return ()=>clearTimeout(timerRef.current)
  }, []);

  const startLogoutTimer = () => {
    clearTimeout(timerRef.current)
    timerRef.current=setTimeout(() => {
      setLoggedIn(false);
      alert("Session Expired! Logged Out.");
    }, 10000);//10 sec
  };

  const stayLoggedIn = () => {
    console.log("User Activity Detected");
    startLogoutTimer();
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Debugging Series</h2>

        <h3>Bug #29 - Auto Logout Timer Not Resetting</h3>

        {loggedIn ? (
          <>
            <div className="status active">
              Logged In
            </div>

            <button
              className="activity-btn"
              onClick={stayLoggedIn}
            >
              I'm Active
            </button>

            <p className="note">
              Auto logout after 10 seconds.
            </p>
          </>
        ) : (
          <div className="status expired">
            Session Expired
          </div>
        )}
      </div>
    </div>
  );
};

export default BankingDashboard;