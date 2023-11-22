import React, { useCallback } from "react";
import CustomCounter from "../../shared/components/CustomCounter";
import {
	removeProductFromCart,
	updateProductInCart,
} from "../../actions/productsAction";
import { connect } from "react-redux";

const CartCounter = ({
	counter,
	id,
	removeProductFromCart,
	updateProductInCart,
}) => {
	const [tempCounter, setTempCounter] = React.useState(counter);

	const handleCounter = useCallback(
		(value) => {
			setTempCounter(value);
			updateProductInCart({ value, id });
		},
		[id, updateProductInCart]
	);

	const removeProduct = () => {
		removeProductFromCart(id);
	};

	return (
		<div className="flex">
			<CustomCounter
				wrapperClass="border border-gray-950"
				value={tempCounter}
				setTempCounter={handleCounter}
			/>
			<button onClick={removeProduct} className="ml-6 underline">
				Ukloni
			</button>
		</div>
	);
};

export default connect(null, { removeProductFromCart, updateProductInCart })(
	CartCounter
);
