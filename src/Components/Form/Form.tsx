import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
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
		expDateM: "",
		expDateY: "",
		cvc: "000",
	});

	const formatters: Record<string, (value: string) => string> = {
		cardNumber: (value) =>
			value
				.replace(/\D/g, "")
				.slice(0, 16)
				.replace(/(.{4})/g, "$1 ")
				.trim(),

		expDateM: (value) => value.replace(/\D/g, "").slice(0, 2),
		expDateY: (value) => value.replace(/\D/g, "").slice(0, 2),
		cvc: (value) => value.replace(/\D/g, "").slice(0, 3),
	};

	const handleChange = (e: FormEvent<HTMLInputElement>): void => {
		const { name, value } = e.currentTarget;
		const formatter = formatters[name] ?? ((v: string) => v);
		const updatedValue = formatter(value);

		const newForm = { ...form, [name]: updatedValue };
		setForm(newForm);
		setCardDetails(newForm);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				id="card-name"
				label="cardholder name"
				name="cardName"
				value={form.cardName}
				type="text"
				placeholder="e.g. Jane Appleseed"
				handleChange={handleChange}
			/>
			<Input
				id="card-number"
				label="card number"
				name="cardNumber"
				value={form.cardNumber}
				type="text"
				placeholder="e.g. 1234 5678 9123 0000"
				handleChange={handleChange}
			/>
			<div className="date-cvc-section">
				<div className="month-year-cvc-container">
					<div className="month-year-inputs">
						<label htmlFor="exp-date">exp date (mm/yy)</label>
						<div className="mm-yy-container">
							<Input
								id="exp-date"
								name="expDateM"
								value={form.expDateM}
								type="number"
								placeholder="MM"
								className="month-year-input"
								handleChange={handleChange}
							/>
							<Input
								id="exp-date"
								name="expDateY"
								value={form.expDateY}
								type="number"
								placeholder="YY"
								className="month-year-input"
								handleChange={handleChange}
							/>
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
