// import { createSlice } from "@reduxjs/toolkit"; 
// import { loginAction, getAction, updateAction, deleteAction } from "../Action/index"; 


// const initialState = {
//   logInData: '', // To store login data
//   userData: '', // To store user data
//   error: '', // To store error messages
// };


// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => { 
//     builder
     
//       .addCase(loginAction.pending, (state) => {
//         console.log("login pending");
//         state.error = null;
//       })
      
//       .addCase(loginAction.fulfilled, (state, { payload }) => {
//         console.log("login fulfilled");
//         state.logInData = payload; 
//       })
    
//       .addCase(getAction.pending, (state) => {
//         console.log("fetch pending");
//         state.error = null;
//       })
     
//       .addCase(getAction.fulfilled, (state, { payload }) => {
//         console.log("fetch fulfilled");
//         state.userData = payload; 
//       })
     
//       .addCase(updateAction.pending, (state) => {
//         console.log("update pending");
//         state.error = null;
//       })
      
//       .addCase(updateAction.fulfilled, (state, { payload }) => {
//         console.log("update fulfilled");
//         state.userData = payload; 
//       })
      
//       .addCase(deleteAction.pending, (state) => {
//         console.log("delete pending");
//         state.error = null;
//       })
      
//       .addCase(deleteAction.fulfilled, (state, { payload }) => {
//         console.log("delete fulfilled");
        
//         state.userData = state.userData.filter(user => user.id !== payload);
//         state.error = null;
//       })
      
//       .addCase(loginAction.rejected, (state, { payload }) => {
//         console.log("login rejected");
//         state.error = payload;
//       })
      
//       .addCase(getAction.rejected, (state, { payload }) => {
//         console.log("fetch rejected");
//         state.error = payload;
//       })
     
//       .addCase(updateAction.rejected, (state, { payload }) => {
//         console.log("update rejected");
//         state.error = payload;
//       })
      
//       .addCase(deleteAction.rejected, (state, { payload }) => {
//         console.log("delete rejected");
//         state.error = payload;
//       });
//   },
// });

// export default loginSlice.reducer; 

import { createSlice } from "@reduxjs/toolkit";
import { loginAction, getAction, updateAction, deleteAction } from "../Action/index";

const initialState = {
  logInData: '', // To store login data
  userData: '',  // To store user data
  error: '',     // To store error messages
};

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
      .addCase(loginAction.pending, (state) => {
        console.log("login pending");
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        console.log("login fulfilled");
        state.logInData = payload; 
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        console.log("login rejected");
        state.error = payload;
      })
      .addCase(updateAction.pending, (state) => {
        console.log("update pending");
        state.error = null;
      })
      .addCase(updateAction.fulfilled, (state, { payload }) => {
        console.log("update fulfilled");
        state.userData = payload; 
      })
      .addCase(updateAction.rejected, (state, { payload }) => {
        console.log("update rejected");
        state.error = payload;
      })
      .addCase(deleteAction.pending, (state) => {
        console.log("delete pending");
        state.error = null;
      })
      .addCase(deleteAction.fulfilled, (state, { payload }) => {
        console.log("delete fulfilled");
        state.userData = state.userData.filter(user => user.id !== payload);
      })
      .addCase(deleteAction.rejected, (state, { payload }) => {
        console.log("delete rejected");
        state.error = payload;
      });
  },
});

export default loginSlice.reducer;

