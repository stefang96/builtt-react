import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ isAllowed, redirectTo = "/login", children }) => {
	if (isAllowed) {
		return <Navigate to={redirectTo} />;
	}
	return children ? children : <Outlet />;
};

export default PublicRoute;
