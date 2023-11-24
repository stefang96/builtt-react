import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const CartInformation = ({ cart }) => {
	if (cart.length === 0) {
		return <div className="text-center text-2xl">Korpa je prazna</div>;
	}
	return (
		<div className="flex flex-col">
			{cart.map((item) => {
				return (
					<div key={item.id} className="border-b border--middle-gray pb-5 pt-6">
						<CartItem product={item} />
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.products.cart,
	};
};
export default connect(mapStateToProps, {})(CartInformation);
