import { userConstants } from "../constants";

/**
 * Login action
 *
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @returns
 */
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
