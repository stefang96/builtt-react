import React from "react";

/**
 * Custom Input field component
 * 
 * @param {string} wrapperClasses - custom classes
 * @param {function} setValue - function to set the value of the input field
 * @param {string} label - label of the input field
 * @param {string} type - type of the input field
 
 * @returns 
 */
const InputField = ({
	wrapperClasses = "",
	setValue,
	label,
	type = "text",
}) => {
	const onChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className={`relative h-11 w-full ${wrapperClasses}`}>
			<input
				className="peer h-full w-full border-b border-[#757575] bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:outline-0 "
				placeholder=" "
				type={type}
				onChange={onChange}
			/>
			<label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#757575] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100  ">
				{label}
			</label>
		</div>
	);
};

export default InputField;
