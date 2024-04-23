import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice from Redux Toolkit
import { loginAction, getAction, updateAction, deleteAction } from "../Action/index"; // Importing async actions

// Initial state for the login slice
const initialState = {
  logInData: '', // To store login data
  userData: '', // To store user data
  error: '', // To store error messages
};

// Creating the login slice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAction.pending, (state) => {
        console.log("fetch pending");
        state.error = null;
      })

      .addCase(getAction.fulfilled, (state, { payload }) => {
        console.log("fetch fulfilled");
        state.userData = payload;
      })
      .addCase(getAction.rejected, (state, { payload }) => {
        console.log("fetch rejected");
        state.error = payload;
      })
  },
});

export default loginSlice.reducer; 
