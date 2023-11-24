import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import PrivateRoute from "./components/route/PrivateRoute";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import PublicRoute from "./components/route/PublicRoute";
import { connect } from "react-redux";

function App({ isLogged }) {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PublicRoute isAllowed={isLogged} redirectTo="/products">
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<PublicRoute isAllowed={isLogged} redirectTo="/products">
								<Login />
							</PublicRoute>
						}
					/>

					<Route
						exact
						path="/products"
						element={
							<PrivateRoute isAllowed={isLogged} redirectTo="/">
								<Products />
							</PrivateRoute>
						}
					/>
					<Route
						exact
						path="/cart"
						element={
							<PrivateRoute isAllowed={isLogged} redirectTo="/">
								<Cart />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		isLogged: localStorage.getItem("isLogged") || state.user.isLogged,
	};
};

export default connect(mapStateToProps, {})(App);
