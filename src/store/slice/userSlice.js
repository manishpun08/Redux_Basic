import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    light: false,
  },
  reducers: {
    changeUserName: (state, action) => {
      state.userName = action.payload;
    },
    toggleLIght: (state, action) => {
      state.light = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserName, toggleLIght } = userSlice.actions;

export default userSlice.reducer;
