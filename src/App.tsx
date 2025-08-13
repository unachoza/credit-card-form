import { FormEvent, useState } from "react";
import SidePanelImage from "../src/assets/images/bg-main-desktop.png";
import mobilePanelImage from "../src/assets/images/bg-main-mobile.png";
import cardFrontImage from "../src/assets/images/bg-card-front.png";
import cardBackImage from "../src/assets/images/bg-card-back.png";
import cardIcon from "../src/assets/images/card-logo.svg";
import iconComplete from "../src/assets/images/icon-complete.svg";
import "./App.css";
import Form from "./Components/Form/Form";

interface CardholderDetails {
	cardNumber: string;
	cardName: string;
	expDate?: number | null | string;
	cvc?: number | null | string;
}

const initialState: CardholderDetails = {
	cardNumber: "0000000000000",
	cardName: "Jane Appleseed",
	expDate: "00/00",
	cvc: "000",
};

function App() {
	const [cardDetails, setCardDetails] = useState<CardholderDetails>(initialState);
	const [complete, setComplete] = useState<boolean>(false);

	const cardFrontValues = Object.entries(cardDetails).slice(0, 3);
	const cardBackValues = Object.entries(cardDetails).slice(3);

	const calcImageSize = () => {
		return window.innerWidth < 600 ? mobilePanelImage : SidePanelImage;
	};

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		console.log("clicked");
		setComplete(true);
	};
	return (
		<>
			<img src={calcImageSize()} className="side-panel" alt="decoration" />
			<div className="container">
				<div className="card-responses-container">
					<div className="front-card-values">
						<img src={cardIcon} className="card-logo" alt="credit card icon" />
						{cardFrontValues.map(([key, value]) => (
							<p key={`${key}-id`} className={key}>
								{value}
							</p>
						))}
					</div>

					<img id="cardFront" className="card" src={cardFrontImage} alt="card-front" />
					<div className="back-card-values">
						{cardBackValues.map(([key, value]) => (
							<p key={`${key}-id`} className={key}>
								{value}
							</p>
						))}
					</div>
					<img id="cardBack" className="card" src={cardBackImage} alt="card-back" />
				</div>
				<div className="card-input-container">
					<Form setCardDetails={setCardDetails} handleSubmit={handleSubmit} />
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
