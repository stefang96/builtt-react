import React, { useCallback } from "react";
import CustomCounter from "../../../shared/components/CustomCounter";
import { CartIcon } from "../../../shared/icons/CartIcon";
import { addToCart } from "../../../actions/productsAction";
import { connect } from "react-redux";

const Counter = ({ counter, id, addToCart }) => {
	const [tempCounter, setTempCounter] = React.useState(counter);

	const handleCounter = useCallback((value) => {
		setTempCounter(value);
	}, []);

	const addProductToCart = () => {
		addToCart({ value: tempCounter, id });
		setTempCounter(1);
	};

	return (
		<div className="flex">
			<CustomCounter value={tempCounter} setTempCounter={handleCounter} />
			<button
				onClick={addProductToCart}
				className="ml-1.5 w-9 h-9 rounded-full bg-black flex items-center justify-center"
			>
				<CartIcon iconClass="flex icon-fill--white icon-w--21p icon-h--21p" />
			</button>
		</div>
	);
};

export default connect(null, { addToCart })(Counter);
