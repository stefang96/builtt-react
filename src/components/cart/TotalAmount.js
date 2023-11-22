import React, { useMemo, useState } from "react";
import { connect } from "react-redux";
import { clearCart } from "../../actions/productsAction";

const TotalAmount = ({ cart, clearCart }) => {
	const [orderPayment, setOrderPayment] = useState(false);
	const fixedDiscount = cart?.length <= 0 ? 0 : 250;

	const totalAmount = useMemo(() => {
		return cart.reduce((acc, item) => {
			return acc + item.price * item.counter;
		}, 0);
	}, [cart]);

	const totalDiscountAmount = useMemo(() => {
		return totalAmount - fixedDiscount;
	}, [fixedDiscount, totalAmount]);

	if (!!orderPayment) {
		return (
			<div className="bg-[#F6F6F6] rounded-md p-6">
				<div className="text-lg font-bold my-7 text-center">Uspesna uplata</div>
			</div>
		);
	}

	const toggleOrderPayment = () => {
		clearCart();
		setOrderPayment(true);
	};

	return (
		<div className="bg-[#F6F6F6] rounded-md p-6">
			<div className="text-lg font-bold mb-7">Tvoja narudžbina</div>
			<div className="flex flex-col">
				<div className="flex justify-between pb-3">
					<div className="text-base">Ukupno</div>
					<div className="text-base">
						{totalAmount.toFixed(2)}
						<sup>RSD</sup>
					</div>
				</div>
				<div className="flex justify-between pb-3">
					<div className="text-base">Usteda</div>
					<div className="text-base">
						-{fixedDiscount.toFixed(2)}
						<sup>RSD</sup>
					</div>
				</div>
				<div className="flex justify-between pb-3 border-b border--middle-gray">
					<div className="text-base">
						Isporuka Daily Express<sup>*</sup>
					</div>
					<div className="text-xs">Besplatna</div>
				</div>
				<div className="flex justify-between py-3">
					<div className="text-base">Ukupno za uplatu</div>
					<div className="text-base">
						{totalDiscountAmount.toFixed(2)}
						<sup>RSD</sup>
					</div>
				</div>
				<div className="text-xs">Cena je sa uključenim PDV-om</div>

				{cart?.length > 0 && (
					<button
						disabled={cart?.length <= 0}
						onClick={toggleOrderPayment}
						className="px-15 py-3 mt-8 bg-black text-white rounded-full"
					>
						Plati
					</button>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.products.cart,
	};
};

export default connect(mapStateToProps, { clearCart })(TotalAmount);
