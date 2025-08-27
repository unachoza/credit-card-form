import { useState } from "react";
import SidePanelImage from "../src/assets/images/bg-main-desktop.png";
import mobilePanelImage from "../src/assets/images/bg-main-mobile.png";
import cardFrontImage from "../src/assets/images/bg-card-front.png";
import cardBackImage from "../src/assets/images/bg-card-back.png";
import CardDisplay from "./Components/CardDisplay/CardDisplay";
import Form from "./Components/Form/Form";
import UserMessage from "./Components/UserMessage/UserMessage";
import { CardholderDetailsType, MessageType } from "./utils/types";
import "./App.css";

const initialState: CardholderDetailsType = {
	cardNumber: "0000 0000 0000 0000",
	cardName: "Jane Appleseed",
	expDateM: "00",
	expDateY: "00",
	cvc: "000",
};

const message: MessageType = {
	title: "Thank you!",
	content: "We've added your card details",
};

function App() {
	const [cardDetails, setCardDetails] = useState<CardholderDetailsType>(initialState);
	const [complete, setComplete] = useState<boolean>(false);

	const calcImageSize = () => {
		return window.innerWidth < 600 ? mobilePanelImage : SidePanelImage;
	};

	const resetForm = () => setComplete(false);

	const handleSubmit = (): void => {
		setComplete(true);
	};

	return (
		<>
			<img src={calcImageSize()} className="side-panel" alt="decoration" />
			<div className="container">
				<div className="card-responses-container">
					<CardDisplay {...cardDetails} />
					<img id="cardFront" className="card" src={cardFrontImage} alt="card-front" />
					<div className="back-card-values">
						<p className="cvc">{cardDetails.cvc || "000"}</p>
					</div>
					<img id="cardBack" className="card" src={cardBackImage} alt="card-back" />
				</div>
				<div className="card-input-container">
					{!complete && <Form setCardDetails={setCardDetails} onSubmit={handleSubmit} />}
					{complete && <UserMessage message={message} reset={resetForm} />}
				</div>
			</div>
		</>
	);
}

export default App;
