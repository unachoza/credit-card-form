import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { CardholderDetailsType } from "../../utils/types";
import "./Form.css";

interface FormProps {
	handleSubmit: (e: FormEvent) => void;
	setCardDetails: Dispatch<SetStateAction<CardholderDetailsType>>;
}

const Form = ({ setCardDetails, handleSubmit }: FormProps) => {
	const [form, setForm] = useState<Omit<CardholderDetailsType, "expDate">>({
		cardNumber: "",
		cardName: "",
		expDateM: "",
		expDateY: "",
		cvc: "",
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
				type="text"
				label="cardholder name"
				name="cardName"
				value={form.cardName}
				placeholder="e.g. Jane Appleseed"
				handleChange={handleChange}
			/>
			<Input
				id="card-number"
				type="text"
				label="card number"
				name="cardNumber"
				value={form.cardNumber}
				placeholder="e.g. 1234 5678 9123 0000"
				handleChange={handleChange}
			/>
			<div className="month-year-cvc-container">
				<div className="month-year-inputs">
					<label htmlFor="exp-date">exp date (mm/yy)</label>
					<div className="mm-yy-container">
						<Input
							id="exp-date-m"
							type="number"
							name="expDateM"
							value={form.expDateM}
							placeholder="MM"
							className="month-year-input"
							handleChange={handleChange}
						/>
						<Input
							id="exp-date-y"
							type="number"
							name="expDateY"
							value={form.expDateY}
							placeholder="YY"
							className="month-year-input"
							handleChange={handleChange}
						/>
					</div>
				</div>
				<Input
					id="cvc"
					type="number"
					label="cvc"
					name="cvc"
					value={form.cvc}
					placeholder="e.g. 123"
					className="cvc-input"
					handleChange={handleChange}
				/>
			</div>
			<Button type="submit" text="Confirm" handleClick={handleSubmit} />
		</form>
	);
};

export default Form;
