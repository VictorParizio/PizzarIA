import { combineReducers } from "redux";
import userSlice from "./user/slice";
import cartSlice from "./cart/slice";

export const rootReducer = combineReducers({
  userSlice,
  cartSlice,
});
