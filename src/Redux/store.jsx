import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Redux/Reducer/index";

export default configureStore({
  reducer: {
    login: loginSlice,
    
  },
});
