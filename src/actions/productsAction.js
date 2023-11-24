import { productsConstants } from "../constants";

/**
 * Add product to cart
 * @param {string} value - value of the product
 * @param {string} id - id of the product
 */
export const addToCart = ({ value, id }) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.ADD_TO_CART,
			payload: { value, id },
		});
	};
};

/**
 * Remove product from cart
 * @param {number} id - id of the product
 */
export const removeProductFromCart = (id) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.REMOVE_FROM_CART,
			payload: { id },
		});
	};
};

/**
 * Update product in cart
 * @param {string} value - value of the product
 * @param {string} id - id of the product
 */
export const updateProductInCart = ({ value, id }) => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.UPDATE_PRODUCT_IN_CART,
			payload: { value, id },
		});
	};
};

/**
 * Clear cart state
 */
export const clearCart = () => {
	return (dispatch) => {
		dispatch({
			type: productsConstants.CLEAR_CART,
		});
	};
};
