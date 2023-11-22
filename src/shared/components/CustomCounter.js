import React from "react";

const CustomCounter = ({ value, setTempCounter }) => {
	const increment = (e) => {
		e.stopPropagation();
		setTempCounter(value + 1);
	};

	const decrement = (e) => {
		e.stopPropagation();
		if (value === 0) return;
		setTempCounter(value - 1);
	};

	return (
		<div>
			<div className="relative flex items-center max-w-[7rem]  max-h-[5rem] bg-white rounded-full py-2 px-4">
				<button type="button" onClick={decrement}>
					<svg
						className="w-3.5 h-3.5 "
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 2"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h16"
						/>
					</svg>
				</button>
				<span className="px-3">{value}</span>
				<button type="button" onClick={increment}>
					<svg
						className="w-3.5 h-3.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 1v16M1 9h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CustomCounter;
