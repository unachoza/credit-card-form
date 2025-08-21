import { FormEvent } from "react";
import "./Input.css";

interface InputProps {
	id: string;
	label?: string;
	name: string;
	className?: string;
	value: string | number;
	type: string;
	placeholder: string;
	handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ id, label, name, value, type, placeholder, handleChange }: InputProps) => {
	return (
		<label htmlFor={id}>
			{label ? label : null}
			<input id={id} name={name} value={value} type={type} placeholder={placeholder} onChange={handleChange} />
		</label>
	);
};

export default Input;
