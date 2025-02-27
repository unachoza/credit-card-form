import { useState } from "react";

interface ButtonProps {
	text: string;
}

const Button = ({ text }: ButtonProps) => {
	return (
		<div className="button-container">
			<button>{text}</button>
		</div>
	);
};

export default Button;
