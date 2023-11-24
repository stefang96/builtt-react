import React from "react";
import CartInformation from "./CartInformation";
import TotalAmount from "./TotalAmount";

/**
 * Cart component
 */
const Cart = () => {
	return (
		<div className="px-28">
			<div className="mb-7">
				<span className="text-xl font-bold">Tvoja korpa</span>
			</div>

			<div className="grid grid-cols-1 gap-14  lg:grid-cols-3">
				<div className="col-span-2">
					<CartInformation />
				</div>
				<div>
					<TotalAmount />
				</div>
			</div>
		</div>
	);
};

export default Cart;
