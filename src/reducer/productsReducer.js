import { productsConstants } from "../constants";

const initialState = {
	list: [
		{
			id: 1,
			title: "Naturela sa Rogačem i Agava Šećerom",
			price: 546,
			imagePath: "krema.png",
			counter: 1,
		},
		{
			id: 2,
			title: "Naturela sa Rogačem i Agava Šećerom",
			price: 546,
			imagePath: "kokos_ulje.png",
			counter: 1,
		},
		{
			id: 3,
			title: "Kokosovo ulje",
			price: 546,
			imagePath: "kokos_ulje.png",
			counter: 1,
		},

		{
			id: 4,
			title: "Kikiriki puter",
			price: 546,
			imagePath: "kikiriki_puter.png",
			counter: 1,
		},
		{
			id: 5,
			title: "Suncokretov puter",
			price: 546,
			imagePath: "suncokret_puter.png",
			counter: 1,
		},

		{
			id: 6,
			title: "Kikiriki puter",
			price: 546,
			imagePath: "kikiriki_puter.png",
			counter: 1,
		},
		{
			id: 7,
			title: "Kikiriki puter",
			price: 546,
			imagePath: "kikiriki_puter.png",
			counter: 1,
		},
		{
			id: 8,
			title: "Product 7",
			price: 546,
			imagePath: "lanevo_ulje.png",
			counter: 1,
		},
		{
			id: 9,
			title: "Kokosov protein",
			price: 546,
			imagePath: "kokos_protein.png",
			counter: 1,
		},
		{
			id: 10,
			title: "Zejtin",
			price: 546,
			imagePath: "zejtin.png",
			counter: 1,
		},
		{
			id: 11,
			title: "Lanevo ulje",
			price: 546,
			imagePath: "lanevo_ulje.png",
			counter: 1,
		},
		{
			id: 12,
			title: "Graum lesnik",
			price: 546,
			imagePath: "graum_lesnik.png",
			counter: 1,
		},
	],
	cart: [],
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case productsConstants.ADD_TO_CART:
			const { value, id } = action.payload;

			const product = state.list.find((product) => product.id === id);
			const cart = state.cart;
			let tempCart = [...cart];
			const productInCart =
				cart?.length > 0 ? cart.find((product) => product.id === id) : null;

			if (productInCart) {
				const index = tempCart.indexOf(productInCart);
				tempCart[index].counter += value;
			} else {
				tempCart.push({ ...product, counter: value });
			}

			return {
				...state,
				cart: Object.freeze(tempCart),
			};

		default:
			return state;
	}
};
