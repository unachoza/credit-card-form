import { FormEvent } from "react";
import Button from "../Button/Button";
import "./Form.css";

interface FormProps {
	handleSubmit: (e: FormEvent) => void;
	handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Form = ({ handleSubmit, handleChange }: FormProps) => {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="card-name">
				cardholder name
				<input id="card-name" name="cardName" type="text" placeholder="e.g. Jane Appleseed" onChange={handleChange} />
			</label>
			<label htmlFor="card-number">
				card number
				<input id="card-number" name="cardNumber" type="number" placeholder="e.g. 1234 5678 9123 0000" />
			</label>
			<div className="date-cvc-section">
				<div className="month-year-cvc-container">
					<div className="month-year-inputs">
						<label htmlFor="exp-date">EXP Date (MM/YY)</label>
						<div className="mm-yy-container">
							<input type="number" name="" id="exp-date" className="month-year-input" placeholder="MM" />
							<input type="number" name="" id="exp-date" className="month-year-input" placeholder="YY" />
						</div>
					</div>
					<div className="cvc-inputs">
						<label htmlFor="cvc">
							CVC
							<input id="cvc" type="number" className="cvc-input" placeholder="e.g. 123" />
						</label>
					</div>
				</div>
			</div>
			<Button type="submit" text="Confirm" handleClick={handleSubmit} />
		</form>
	);
};

export default Form;
