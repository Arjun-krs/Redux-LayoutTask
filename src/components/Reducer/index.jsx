import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../Action/index";

const initialState = {
  logInData: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.error = null;
        console.log("Pending", loginAction);
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.logInData = payload;
        console.log("fulfilled", loginAction);
      });
  },
});

export default loginSlice.reducer;
