import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    update(_state, action) {
      return action.payload;
    },
  },
});

export const { update } = filterSlice.actions;
export default filterSlice.reducer;

