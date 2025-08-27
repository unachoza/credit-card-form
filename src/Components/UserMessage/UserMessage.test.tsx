import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UserMessage from "./UserMessage";

describe("User Message Component", () => {
	const message = {
		title: "congrats",
		content: "you did it",
	};
	const reset = vi.fn();
	render(<UserMessage message={message} reset={reset} />);
	it("should render correct message and button", () => {});
});
