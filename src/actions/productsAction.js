import { productsConstants } from "../constants";

export const addToCart = ({ value, id }) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.ADD_TO_CART,
			payload: { value, id },
		});
	};
};

export const removeProductFromCart = (id) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.REMOVE_FROM_CART,
			payload: { id },
		});
	};
};

export const updateProductInCart = ({ value, id }) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.UPDATE_PRODUCT_IN_CART,
			payload: { value, id },
		});
	};
};

export const clearCart = () => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.CLEAR_CART,
		});
	};
};
