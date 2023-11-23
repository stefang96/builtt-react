import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/userAction";

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
				<div className="relative h-11 w-full mb-4">
					<input
						className="peer h-full w-full border-b border-[#757575] bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:outline-0 "
						placeholder=" "
						type="email"
						onChange={(e) => setBody({ ...body, email: e.target.value })}
					/>
					<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#757575] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100  ">
						E-mail adresa
					</label>
				</div>
				<div className="relative h-11 w-full">
					<input
						className="peer h-full w-full border-b border-[#757575] bg-transparent pt-4 pb-1.5 text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0"
						placeholder=" "
						type="password"
						onChange={(e) => setBody({ ...body, password: e.target.value })}
					/>
					<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#757575] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100  ">
						Upišite šifru
					</label>
				</div>
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
