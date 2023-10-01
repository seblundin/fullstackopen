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
export default notificationSlice.reducer;

