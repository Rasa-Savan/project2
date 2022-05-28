import { createSlice } from "@reduxjs/toolkit";

const userLoginSlice = createSlice({
  name: "userLoginRedux",
  initialState: {
    userLoginStore: null,
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.userLoginStore = action.payload;
    },
    setResetUserLogin: (state) => {
      state.userLoginStore = null;
    },
  },
});

export const { setUserLogin, setResetUserLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;
