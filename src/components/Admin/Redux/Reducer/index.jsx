import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../Action/index";

// Initial state for the login slice
const initialState = {
    logInData: '',
    userData: '',
    error: '',
};


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

            .addCase(loginAction.rejected, (state, action) => {
                console.log("login rejected");
                state.error = action.error.message;
            })
    },
});

export default loginSlice.reducer; 