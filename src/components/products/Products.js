import React, { useMemo } from "react";
import { connect } from "react-redux";
import Product from "./single-view/Product";

/**
 * Render all products
 * @param {object} props - object with products
 * @returns
 */
const Products = (props) => {
	const { products } = props;

	const numberOfProducts = useMemo(() => {
		return products?.length;
	}, [products]);

	return (
		<div className="px-28">
			<div className="mb-7">
				<span className="text-xl font-bold">Svi proizvodi</span>
				<span className="text-base  opacity-50 ml-2">
					{numberOfProducts} proizvoda
				</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
				{products.map((product) => {
					return (
						<div key={product.id}>
							<Product product={product} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products.list,
	};
};

export default connect(mapStateToProps, {})(Products);
