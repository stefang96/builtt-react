import { userConstants } from "../constants";

export const login = (email, password) => {
	return (dispatch) => {
		dispatch({
			type: userConstants.LOGIN,
			payload: {
				email,
				password,
			},
		});
	};
};
