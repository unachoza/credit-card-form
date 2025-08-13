import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import "./Form.css";
import { CardholderDetails } from "../../utils/types";

interface FormProps {
	handleSubmit: (e: FormEvent) => void;
	setCardDetails: Dispatch<SetStateAction<CardholderDetails>>;
}

const Form = ({ setCardDetails, handleSubmit }: FormProps) => {
	const [form, setForm] = useState<CardholderDetails>({
		cardNumber: "",
		cardName: "",
		expDate: "00/00",
		cvc: "000",
	});

	const formatCreditCardNumber = (input: string): string => {
		let newInput = input
			.replace(/\D/g, "")
			.slice(0, 16)
			.replace(/(.{4})/g, "$1 ")
			.trim();
		return newInput;
	};

	const handleChange = (e: FormEvent<HTMLInputElement>): void => {
		const { name, value } = e.currentTarget;
		let updatedValue = value;
		if (name === "cardNumber") {
			updatedValue = formatCreditCardNumber(value);
		}

		const newForm = { ...form, [name]: updatedValue };
		setForm(newForm);
		setCardDetails(newForm);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="card-name">
				cardholder name
				<input
					id="card-name"
					name="cardName"
					value={form.cardName}
					type="text"
					placeholder="e.g. Jane Appleseed"
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="card-number">
				card number
				<input
					id="card-number"
					name="cardNumber"
					value={form.cardNumber}
					type="text"
					placeholder="e.g. 1234 5678 9123 0000"
					onChange={handleChange}
				/>
			</label>
			<div className="date-cvc-section">
				<div className="month-year-cvc-container">
					<div className="month-year-inputs">
						<label htmlFor="exp-date">exp date (mm/yy)</label>
						<div className="mm-yy-container">
							<input type="number" name="" id="exp-date" className="month-year-input" placeholder="MM" />
							<input type="number" name="" id="exp-date" className="month-year-input" placeholder="YY" />
						</div>
					</div>
					<div className="cvc-inputs">
						<label htmlFor="cvc">
							cvc
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
