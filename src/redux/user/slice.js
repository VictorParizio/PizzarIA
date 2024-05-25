import { createSlice } from "@reduxjs/toolkit";

const token = sessionStorage.getItem("token");

const initialState = {
  user: null || token,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
