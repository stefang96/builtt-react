import React from "react";
import CartCounter from "./CartCounter";

/**
 * Single cart item component
 */
const CartItem = ({ product }) => {
	return (
		<div className="flex">
			<img
				className="w-36 h-36 mr-9"
				src={require(`../../assets/images/${product.imagePath}`)}
				alt={product.title}
			/>
			<div className="flex flex-col justify-between">
				<div>
					<div className="text-lg font-bold">{product.title}</div>
					<div className="text-base">750g</div>
					<div className="text-xs text-gray-400">
						{product.price}
						<sup>RSD</sup> po komadu
					</div>
				</div>
				<CartCounter counter={+product.counter} id={product.id} />
			</div>
			<div className="ml-auto">
				<div className="text-2xl font-normal">
					{product.counter * product.price}
					<sup className="text-sm">RSD</sup>
				</div>
				<div className="text-orange-600 line-through">
					{(product.counter * product.price) / 2}
					<sup className="text-sm">RSD</sup>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
