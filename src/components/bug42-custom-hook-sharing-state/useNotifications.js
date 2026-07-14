import { useState } from "react";

const useNotifications = () => {

  const [count, setCount] = useState(0);

  const addNotification = () => {
    setCount(count + 1);
  };

  return {
    count,
    addNotification,
  };
};

export default useNotifications;

// Notification Bell count = 0 
// Notification Panel count = 0