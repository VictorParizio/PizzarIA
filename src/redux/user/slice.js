import { createSlice } from "@reduxjs/toolkit";
import { isTokenValid } from "../../utils/isTokinValid";

const token = sessionStorage.getItem("token");
const isAuthenticated = isTokenValid(token);

const initialState = {
  user: isAuthenticated ? { token } : null,
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
