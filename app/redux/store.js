import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productListReducer from "./productListSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		productList: productListReducer,
	},
});
