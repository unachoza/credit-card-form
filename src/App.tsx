import { FormEvent, useState } from "react";
import SidePanelImage from "../src/assets/images/bg-main-desktop.png";
import mobilePanelImage from "../src/assets/images/bg-main-mobile.png";
import cardFrontImage from "../src/assets/images/bg-card-front.png";
import cardBackImage from "../src/assets/images/bg-card-back.png";
import cardIcon from "../src/assets/images/card-logo.svg"
import iconComplete from "../src/assets/images/icon-complete.svg"
import "./App.css";

function App() {
	const [complete, setComplete] = useState<boolean>(false)
	const calcImageSize = () => {
		return window.innerWidth < 600 ? mobilePanelImage : SidePanelImage;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setComplete(true)
	};
	return (
		<>
			<img src={calcImageSize()} className="side-panel" alt="decoration" />
			<div className="container">
				<div className="card-responses-container">
					<img id="cardFront" className="card" src={cardFrontImage} alt="card-front" />
					<img id="cardBack" className="card" src={cardBackImage} alt="card-back" />
					<img src={cardIcon} alt="card icon" />
					<img src={iconComplete} alt="card icon" />
				</div>
				<div className="card-input-container">
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
				</div>
				<div className="card"></div>
			</div>
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
