import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Feature/Cart/cartSlice";
import modalSlice from "./Feature/Modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});
