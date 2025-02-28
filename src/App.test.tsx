import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
	it("should render text", () => {
		render(<App />);
		// const h1Element = screen.getByRole("heading", { level: 1 });
		// expect(h1Element).toBeInTheDocument();
		// expect(h1Element).toHaveTextContent("Vite + React");
	});
	it("should update the details on the card as the user fills in the fields", () => {});
	it("should Validate the form fields when the form is submitted");
	it("shoud display the completed state when form is submitted with no errors", () => {});
	it("should Reset the form when the user clicks Continue on the completed state ", () => {});
	it("should load custom font and render text correctly", () => {});
});
