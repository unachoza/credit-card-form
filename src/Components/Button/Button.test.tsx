import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from '@testing-library/user-event'
import Button from "./Button";

describe("Button Component", () => {
	it("should render text", () => {
		render(<Button text="example" />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent(/example/i);
	});

    it("should reset the form when the user clicks button on the completed state with text 'continue'", async () => {
        const mockHandleSubmit = vi.fn();
        render(<Button text="continue" />)
        const buttonElement = await screen.findByRole('button')
        expect(buttonElement).toBeInTheDocument()
        await userEvent.click(buttonElement);
		expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    })
});
