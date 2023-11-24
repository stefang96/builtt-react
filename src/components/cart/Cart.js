import React from "react";
import CartInformation from "./CartInformation";
import TotalAmount from "./TotalAmount";

/**
 * Cart component
 */
const Cart = () => {
	return (
		<div className="px-28 grid grid-cols-3 gap-14">
			<div className="col-span-2">
				<CartInformation />
			</div>
			<div>
				<TotalAmount />
			</div>
		</div>
	);
};

export default Cart;
