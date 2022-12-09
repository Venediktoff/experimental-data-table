import React from "react";

type TInput = {
	name: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, placeholder, onChange }: TInput) => {
	return (
		<input
			type="text"
			name={name}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

export default Input;
