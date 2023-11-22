import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/Header";

const PrivateRoute = ({ isAllowed, redirectTo = "/", children }) => {
	if (!isAllowed) {
		return <Navigate to={redirectTo} />;
	}
	return children ? (
		<>
			<Header /> {children}
		</>
	) : (
		<Outlet />
	);
};

export default PrivateRoute;
