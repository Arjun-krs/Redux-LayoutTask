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
  extraReducers: (builder) => { // Extra reducers to handle async actions
    builder
      // Handling login action pending state
      .addCase(loginAction.pending, (state) => {
        console.log("login pending", loginAction);
        state.error = null;
      })
      // Handling login action fulfilled state
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        console.log("login fulfilled", loginAction);
        state.logInData = payload; // Setting login data
      })
      // Handling get action pending state
      .addCase(getAction.pending, (state) => {
        console.log("fetch pending", getAction);
        state.error = null;
      })
      // Handling get action fulfilled state
      .addCase(getAction.fulfilled, (state, { payload }) => {
        console.log("fetch fulfilled", getAction);
        state.userData = payload; // Setting user data
      })
      // Handling update action pending state
      .addCase(updateAction.pending, (state) => {
        console.log("update pending", updateAction);
        state.error = null;
      })
      // Handling update action fulfilled state
      .addCase(updateAction.fulfilled, (state, { payload }) => {
        console.log("update fulfilled", updateAction);
        state.userData = payload; // Setting updated user data
      })
      // Handling delete action pending state
      .addCase(deleteAction.pending, (state) => {
        console.log("delete pending", deleteAction);
        state.error = null;
      })
      // Handling delete action fulfilled state
      .addCase(deleteAction.fulfilled, (state, { payload }) => {
        console.log("delete fulfilled", deleteAction);
        // Filtering out the deleted user from the userData array
        state.userData = state.userData.filter(user => user.id !== payload);
        state.error = null;
      })
      // Handling login action rejected state
      .addCase(loginAction.rejected, (state, { payload }) => {
        console.log("login rejected", loginAction);
        state.error = payload;
      })
      // Handling get action rejected state
      .addCase(getAction.rejected, (state, { payload }) => {
        console.log("fetch rejected", getAction);
        state.error = payload;
      })
      // Handling update action rejected state
      .addCase(updateAction.rejected, (state, { payload }) => {
        console.log("update rejected", updateAction);
        state.error = payload;
      })
      // Handling delete action rejected state
      .addCase(deleteAction.rejected, (state, { payload }) => {
        console.log("delete rejected", deleteAction);
        state.error = payload;
      });
  },
});

export default loginSlice.reducer; 
