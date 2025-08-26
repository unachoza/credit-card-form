import { FormEvent } from "react";
import "./Input.css";

interface InputProps {
	id: string;
	label?: string;
	name: string;
	className?: string;
	value: string | number;
	errorMessage?: string;
	type: string;
	placeholder: string;
	handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, name, className, value, errorMessage, type, placeholder, handleChange }: InputProps) => {
	return (
		<label htmlFor={id}>
			<div className="label-text">{label ? label : null}</div>
			<input
				id={id}
				name={name}
				className={className ? className : ""}
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
				required
			/>
			<div className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</div>
		</label>
	);
};

export default Input;
