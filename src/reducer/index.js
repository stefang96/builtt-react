import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsReducer";
import { usersReducer } from "./usersReducer";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		user: usersReducer,
	},
});
