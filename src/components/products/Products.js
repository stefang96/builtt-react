import React from "react";
import { connect } from "react-redux";
import Product from "./single-view/Product";

const Products = (props) => {
	const { products } = props;

	return (
		<div className="px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
			{products.map((product) => {
				return (
					<div key={product.id}>
						<Product product={product} />
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products.list,
	};
};

export default connect(mapStateToProps, {})(Products);
