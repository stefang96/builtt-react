import { userConstants } from "../constants";

const initialState = {
	email: "stefangrujicic@gmail.com",
	password: "p@$$word",
	isLogged: false,
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case userConstants.LOGIN:
			localStorage.setItem("isLogged", true);
			return {
				...state,
				isLogged: true,
			};

		default:
			return state;
	}
};
