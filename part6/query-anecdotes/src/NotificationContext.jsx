/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    case "RESET":
      return "";
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ""
  );

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotificationDispatch = () => {
  const [_notif, dispatch] = useContext(NotificationContext);
  return dispatch;
};

export const useNotification = () => {
  const [notif, _dispatch] = useContext(NotificationContext);
  return notif;
};

export default NotificationContext;

