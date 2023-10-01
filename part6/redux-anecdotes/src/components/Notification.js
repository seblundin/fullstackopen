import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;
    if (notification !== "") {
      timeoutId = setTimeout(() => {
        dispatch(update(""));
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
  };
  return notification && <div style={style}>{notification}</div>;
};

export default Notification;

