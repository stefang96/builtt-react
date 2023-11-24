import React, { useMemo } from "react";
import { CartIcon } from "../../shared/icons/CartIcon";
import { connect } from "react-redux";

const CartHeader = ({ cart }) => {
	const returnTotalCartItems = useMemo(() => {
		return cart.length;
	}, [cart]);

	return (
		<div className="relative">
			<CartIcon />
			<div className="absolute header-counter">{returnTotalCartItems}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.products.cart,
	};
};

export default connect(mapStateToProps, {})(CartHeader);
