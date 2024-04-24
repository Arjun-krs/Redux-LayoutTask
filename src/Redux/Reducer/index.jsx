// import { createSlice } from "@reduxjs/toolkit";
// import { loginAction, getAction, updateAction, deleteAction } from "../Action/index";

// const initialState = {
//   logInData: '', // To store login data
//   userData: '',  // To store user data
//   error: '',     // To store error messages
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAction.pending, (state) => {
//         console.log("fetch pending");
//         state.error = null;
//       })
//       .addCase(getAction.fulfilled, (state, { payload }) => {
//         console.log("fetch fulfilled");
//         state.userData = payload; 
//       })
//       .addCase(getAction.rejected, (state, { payload }) => {
//         console.log("fetch rejected");
//         state.error = payload;
//       })
//       .addCase(loginAction.pending, (state) => {
//         console.log("login pending");
//         state.error = null;
//       })
//       .addCase(loginAction.fulfilled, (state, { payload }) => {
//         console.log("login fulfilled");
//         state.logInData = payload; 
//       })
//       .addCase(loginAction.rejected, (state, { payload }) => {
//         console.log("login rejected");
//         state.error = payload;
//       })
//       .addCase(updateAction.pending, (state) => {
//         console.log("update pending");
//         state.error = null;
//       })
//       .addCase(updateAction.fulfilled, (state, { payload }) => {
//         console.log("update fulfilled");
//         state.userData = payload; 
//       })
//       .addCase(updateAction.rejected, (state, { payload }) => {
//         console.log("update rejected");
//         state.error = payload;
//       })
//       .addCase(deleteAction.pending, (state) => {
//         console.log("delete pending");
//         state.error = null;
//       })
//       .addCase(deleteAction.fulfilled, (state, { payload }) => {
//         console.log("delete fulfilled");
//         state.userData = state.userData.filter(user => user.id !== payload);
//       })
//       .addCase(deleteAction.rejected, (state, { payload }) => {
//         console.log("delete rejected");
//         state.error = payload;
//       });
//   },
// });

// export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice from Redux Toolkit
import { loginAction, getAction, updateAction, deleteAction } from "../../Redux/Action/index"; // Importing async actions

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
      
      .addCase(loginAction.pending, (state) => {
        console.log("login pending");
        state.error = null;
      })
      
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        console.log("login fulfilled");
        state.logInData = payload; 
      })
      // Handling get action pending state
      .addCase(getAction.pending, (state) => {
        console.log("fetch pending");
        state.error = null;
      })
      // Handling get action fulfilled state
      .addCase(getAction.fulfilled, (state, { payload }) => {
        console.log("fetch fulfilled");
        state.userData = payload; // Setting user data
      })
      // Handling update action pending state
      .addCase(updateAction.pending, (state) => {
        console.log("update pending");
        state.error = null;
      })
      // Handling update action fulfilled state
      .addCase(updateAction.fulfilled, (state, { payload }) => {
        console.log("update fulfilled");
        state.userData = payload; // Setting updated user data
      })
      // Handling delete action pending state
      .addCase(deleteAction.pending, (state) => {
        console.log("delete pending");
        state.error = null;
      })
      // Handling delete action fulfilled state
      .addCase(deleteAction.fulfilled, (state, { payload }) => {
        console.log("delete fulfilled");
        // Filtering out the deleted user from the userData array
        state.userData = state.userData.filter(user => user.id !== payload);
        state.error = null;
      })
      // Handling login action rejected state
      .addCase(loginAction.rejected, (state, { payload }) => {
        console.log("login rejected");
        state.error = payload;
      })
      // Handling get action rejected state
      .addCase(getAction.rejected, (state, { payload }) => {
        console.log("fetch rejected");
        state.error = payload;
      })
      // Handling update action rejected state
      .addCase(updateAction.rejected, (state, { payload }) => {
        console.log("update rejected");
        state.error = payload;
      })
      // Handling delete action rejected state
      .addCase(deleteAction.rejected, (state, { payload }) => {
        console.log("delete rejected");
        state.error = payload;
      });
  },
});

export default loginSlice.reducer; 


