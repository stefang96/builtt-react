import React from "react";
import { LogoIcon } from "../../shared/icons/LogoIcon";
import { Link } from "react-router-dom";
import CartHeader from "./CartHeader";

const Header = () => {
	return (
		<div className="flex header">
			<Link to="/">
				<LogoIcon />
			</Link>

			<Link to="/cart">
				<CartHeader />
			</Link>
		</div>
	);
};

export default Header;
