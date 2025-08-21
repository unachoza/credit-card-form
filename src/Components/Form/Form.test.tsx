import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form Component", () => {
	it("should render the form", () => {
		const handleSubmit = vi.fn();
		const handleChange = vi.fn();
		render(<Form setCardDetails={handleChange} handleSubmit={handleSubmit} />);
		const formElement = screen.getByRole("form");
		expect(formElement).toBeInTheDocument();
	});

	it("does not render number input controls");

	it("should update user input from form to credit card image on key press");
});
