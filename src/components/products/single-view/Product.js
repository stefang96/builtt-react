import React from "react";
import ProductCounter from "./ProductCounter";

/**
 * Render single product
 * @param {object} product - object with product data
 * @returns
 */
const Product = ({ product }) => {
	return (
		<div className="flex flex-col">
			<div className="product-card--image relative">
				<img
					src={require(`../../../assets/images/${product.imagePath}`)}
					alt={product.title}
				/>
				<div className="hide absolute left-2 bottom-2">
					<ProductCounter counter={product.counter} id={product.id} />
				</div>
			</div>

			<div className="text-lg font-bold mt-4">{product.title}</div>
			<div className="text-2xl font-normal">
				{product.price}
				<sup className="text-sm">RSD</sup>
			</div>
		</div>
	);
};

export default Product;
