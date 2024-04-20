import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../components/Reducer/index";

export default configureStore({
  reducer: {
    login: loginSlice,
    // other reducers...
  },
});
