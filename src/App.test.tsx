import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
	it("should render text", () => {
		render(<App />);
		const h1Element = screen.getByRole("heading", { level: 1 });
		expect(h1Element).toBeInTheDocument();
		expect(h1Element).toHaveTextContent("Vite + React");
	});
});
