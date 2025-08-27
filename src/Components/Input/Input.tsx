import { FormEvent } from "react";
import "./Input.css";

interface InputProps {
	id: string;
	label?: string;
	min?: number;
	name: string;
	className?: string;
	value: string | number;
	errorMessage?: string;
	placeholder: string;
	handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, name, className, value, errorMessage, placeholder, handleChange, min }: InputProps) => {
	return (
		<label htmlFor={id}>
			<div className="label-text">{label ? label : null}</div>
			<input
				id={id}
				name={name}
				className={className ? className : ""}
				value={value}
				type="text"
				placeholder={placeholder}
				onChange={handleChange}
				required
				minLength={min}
			/>
			<div className="error-message" role="alert" id={`${name}-error`}>
				{errorMessage}
			</div>
		</label>
	);
};

export default Input;
