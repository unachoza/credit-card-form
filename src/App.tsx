import { FormEvent, useState } from "react";
import SidePanelImg from "../src/assets/images/bg-main-desktop.png";
import mobilePanelImg from "../src/assets/images/bg-main-mobile.png";
import "./App.css";

function App() {
	const calcImageSize = () => {
		return window.innerWidth < 600 ? mobilePanelImg : SidePanelImg;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<>
			<img src={calcImageSize()} className="side-panel" alt="decoration" />
			<form onSubmit={handleSubmit}>
				<label htmlFor="card-name">
					cardholder name
					<input id="card-name" type="text" placeholder="e.g. Jane Appleseed" />
				</label>
				<label htmlFor="card-number">
					card number
					<input id="card-name" type="number" placeholder="e.g. 1234 5678 9123 0000" />
				</label>
				<div className="date-cvc-section">
					<div className="month-year-container">
						<label htmlFor="exp-date">EXP Date MM/YY</label>
						<div className="month-year-inputs">
							<input type="number" name="" id="exp-date" className="month-year-input" placeholder="MM" />
							<input type="number" name="" id="exp-date" className="month-year-input" placeholder="YY" />
						</div>
					</div>

					<label htmlFor="cvc">
						CVC
						<input id="cvc" type="number" className="cvc-input" placeholder="e.g. 123" />
					</label>
				</div>
			</form>
			<div className="card"></div>
		</>
	);
}

export default App;

// 0000 0000 0000 0000
// Jane Appleseed
// 00/00

// 000

// Cardholder Name
// e.g. Jane Appleseed

// Card Number
// e.g. 1234 5678 9123 0000

// Exp. Date (MM/YY)
// MM
// YY

// CVC
// e.g. 123

// Confirm

// <!-- Completed state start -->

// Thank you!
// We've added your card details
// Continue
