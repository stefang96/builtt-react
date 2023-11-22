import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import PrivateRoute from "./components/route/PrivateRoute";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import PublicRoute from "./components/route/PublicRoute";

function App() {
	const user = "nest"; // localStorage.getItem("user");

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PublicRoute isAllowed={user} redirectTo="/products">
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path="/login"
						element={
							<PublicRoute isAllowed={user} redirectTo="/products">
								<Login />
							</PublicRoute>
						}
					/>

					<Route
						exact
						path="/products"
						element={
							<PrivateRoute isAllowed={!!user} redirectTo="/">
								<Products />
							</PrivateRoute>
						}
					/>
					<Route
						exact
						path="/cart"
						element={
							<PrivateRoute isAllowed={!!user} redirectTo="/">
								<Cart />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
