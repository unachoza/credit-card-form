import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { CardholderDetailsType } from "../../utils/types";
import "./Form.css";

interface FormProps {
	onSubmit: () => void;
	setCardDetails: Dispatch<SetStateAction<CardholderDetailsType>>;
}

const Form = ({ setCardDetails, onSubmit }: FormProps) => {
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
		cardName: (value) => value.replace(/^[\s\d]+/, ""),
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

	const validate = () => {
		return Object.values(form).every((value) => value) ? true : false;
	};

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			onSubmit();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				id="card-name"
				label="cardholder name"
				name="cardName"
				value={form.cardName}
				errorMessage="can't be blank"
				placeholder="e.g. Jane Appleseed"
				handleChange={handleChange}
			/>
			<Input
				id="card-number"
				label="card number"
				name="cardNumber"
				value={form.cardNumber}
				errorMessage="card number must be 16 digits"
				placeholder="e.g. 1234 5678 9123 0000"
				handleChange={handleChange}
				min={parseInt("16")}
			/>
			<div className="month-year-cvc-container">
				<div className="month-year-inputs">
					<div className="label-text">exp date (mm/yy)</div>
					<div className="mm-yy-container">
						<Input
							id="exp-date-m"
							name="expDateM"
							value={form.expDateM}
							errorMessage="can't be blank"
							placeholder="MM"
							className="month-year-input"
							handleChange={handleChange}
							min={parseInt("2")}
						/>
						<Input
							id="exp-date-y"
							name="expDateY"
							value={form.expDateY}
							placeholder="YY"
							className="month-year-input"
							handleChange={handleChange}
							min={parseInt("2")}
						/>
					</div>
				</div>
				<Input
					id="cvc"
					label="cvc"
					name="cvc"
					value={form.cvc}
					errorMessage="can't be blank"
					placeholder="e.g. 123"
					className="cvc-input"
					handleChange={handleChange}
					min={parseInt("3")}
				/>
			</div>
			<Button type="submit" text="Confirm" handleClick={handleSubmit} />
		</form>
	);
};

export default Form;
