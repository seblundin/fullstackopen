import { useContext } from "react";
import NotificationContext from "../NotificationContext";
import { useEffect } from "react";

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext);

  useEffect(() => {
    let timeoutId;
    if (notification !== "") {
      timeoutId = setTimeout(() => {
        dispatch({ type: "RESET" });
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [notification, dispatch]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (!notification) return null;

  return <div style={style}>{notification}</div>;
};

export default Notification;

