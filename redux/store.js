import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./userSlice";
import languageReducer from "./languageSlice";

export default configureStore({
  reducer: {
    userLoginRedux: userLoginReducer,
    languageRedux: languageReducer,
  },
});
