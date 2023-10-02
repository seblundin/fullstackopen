import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    update(_state, action) {
      return action.payload;
    },
  },
});

export const { update } = notificationSlice.actions;

export const setNotification = (notification, timeout) => {
  return async (dispatch) => {
    dispatch(update(notification));
    setTimeout(() => {
      dispatch(update(""));
    }, timeout * 1000);
  };
};
export default notificationSlice.reducer;

