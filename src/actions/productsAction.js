import { productsConstants } from "../constants";

export const addToCart = ({ value, id }) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.ADD_TO_CART,
			payload: { value, id },
		});
	};
};
