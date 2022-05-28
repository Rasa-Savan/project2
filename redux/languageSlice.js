import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "languageRedux",
  initialState: {
    languageStore: "lao",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.languageStore = action.payload;
    },
    resetLanguage: (state) => {
      state.languageStore = null;
    },
  },
});

export const { setLanguage, resetLanguage } = languageSlice.actions;
export default languageSlice.reducer;
