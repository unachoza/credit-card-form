import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("input component", () => {
	it("should allow user to interact with one input at a time, without clearing the placeholder text of a different input", () => {
		const handleChange = vi.fn();
		render(
			<Input
				id="card-name"
				label="cardholder name"
				name="cardName"
				value="value"
				type="text"
				placeholder="e.g. Jane Appleseed"
				handleChange={handleChange}
			/>
		);
		const inputElement = screen.getByLabelText("cardholder name");
		expect(inputElement).toBeInTheDocument();
	});

	it("should allow user to interact with one input at a time, without clearing the display of a different input");
});
