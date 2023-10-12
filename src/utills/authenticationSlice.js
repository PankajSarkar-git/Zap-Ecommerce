import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthentication: true,
  },
  reducers: {
    logIn: (state) => {
      state.isAuthentication = true;
    },
    logOut: (state) => {
      state.isAuthentication = false;
    },
  },
});

export const {logIn , logOut} = authenticationSlice.actions;

export default authenticationSlice.reducer;