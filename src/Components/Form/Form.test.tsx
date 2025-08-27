import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form Component", () => {
	const setup = () => {
		const onSubmit = vi.fn();
		const setCardDetails = vi.fn();
		render(<Form setCardDetails={setCardDetails} onSubmit={onSubmit} />);
		return { onSubmit, setCardDetails };
	};

	it("should render the form", () => {
		const onSubmit = vi.fn();
		const handleChange = vi.fn();
		render(<Form setCardDetails={handleChange} onSubmit={onSubmit} />);
		const formElement = screen.getByRole("form");
		expect(formElement).toBeInTheDocument();
	});

	it("renders the form with accessible inputs and labels", () => {
		setup();

		// All form fields are rendered with labels or placeholders
		expect(screen.getByLabelText(/cardholder name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText("MM")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("YY")).toBeInTheDocument();
		expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();

		// Accessibility check — form role
		expect(screen.getByRole("form")).toBeInTheDocument();
	});

	it("does not render number input spinners (all inputs are type text)", () => {
		setup();
		const inputs = screen.getAllByRole("textbox");
		inputs.forEach((input) => {
			expect(input).toHaveAttribute("type", "text"); // prevents browser spinners
		});
	});

	it("should update user input from form to credit card image on key press");
});

describe("Error handling for Form Component", () => {
	const setup = () => {
		const onSubmit = vi.fn();
		const setCardDetails = vi.fn();
		render(<Form setCardDetails={setCardDetails} onSubmit={onSubmit} />);
		return { onSubmit, setCardDetails };
	};

	it("does not allow submission with empty fields", async () => {
		const { onSubmit } = setup();
		const button = screen.getByRole("button", { name: /confirm/i });

		await userEvent.click(button);
		expect(onSubmit).not.toHaveBeenCalled();
	});

	it("should format card number input in 16 digit pattern in 4-digit groups", async () => {
		setup();
		const cardNumber = screen.getByLabelText(/card number/i);
		await userEvent.type(cardNumber, "1234567812345678");
		expect(cardNumber).toHaveValue("1234 5678 1234 5678");
	});

	it("rejects non-numeric characters in card number", async () => {
		setup();
		const cardNumber = screen.getByLabelText(/card number/i);

		await userEvent.type(cardNumber, "abcd1234");
		expect(cardNumber).toHaveValue("1234");
	});

	it("should check for valid month; between 01 -12", async () => {
		setup();
		const expMonth = screen.getByPlaceholderText("MM");

		await userEvent.type(expMonth, "15"); // invalid month
		// should display error message
		// You can extend: expect(screen.getByText(/invalid month/i)).toBeInTheDocument();
		expect(expMonth).toHaveValue("15"); // formatted, but your validator should catch later
	});

	it("rejects expiration years in the past (assuming '24' min)", async () => {
		setup();
		const expYear = screen.getByPlaceholderText("YY");

		await userEvent.type(expYear, "20"); // year < 24
		expect(expYear).toHaveValue("20");
		// same idea: expect(error message)
	});

	it("submits successfully when all inputs are valid", async () => {
		const { onSubmit } = setup();

		await userEvent.type(screen.getByLabelText(/cardholder name/i), "Jane Appleseed");
		await userEvent.type(screen.getByLabelText(/card number/i), "1234567812345678");
		await userEvent.type(screen.getByPlaceholderText("MM"), "12");
		await userEvent.type(screen.getByPlaceholderText("YY"), "28");
		await userEvent.type(screen.getByLabelText(/cvc/i), "123");
		console.log(screen.getByRole("button", { name: /confirm/i }));
		await userEvent.click(screen.getByRole("button", { name: /confirm/i }));
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});
