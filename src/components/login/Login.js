import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/userAction";
import InputField from "../../shared/components/InputField";

/**
 * Login component
 */
const Login = ({ email, password, login }) => {
	const [body, setBody] = useState({
		email: "",
		password: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (email === body.email && password === body.password)
			login(body.email, body.password);
	};
	return (
		<div className="flex justify-center h-screen items-center flex-col">
			<form onSubmit={onSubmit} className="w-[420px]">
				<div className="text-xl font-bold mb-10">Prijavi se na svoj nalog</div>
				<InputField
					wrapperClasses="mb-4"
					label="E-mail adresa"
					type="email"
					setValue={(value) => setBody({ ...body, email: value })}
				/>
				<InputField
					type="password"
					label="Upišite šifru"
					setValue={(value) => setBody({ ...body, password: value })}
				/>
				<button
					type="submit"
					className="px-15 py-3 mt-10 w-full bg-black text-white rounded-full"
				>
					Prijavi se na nalog
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		email: state.user.email,
		password: state.user.password,
	};
};

export default connect(mapStateToProps, { login })(Login);
