// src/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { setToken, clearToken, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
