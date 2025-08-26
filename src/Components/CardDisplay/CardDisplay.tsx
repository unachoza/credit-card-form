import cardIcon from "../../assets/images/card-logo.svg";
import { CardholderDetailsType } from "../../utils/types";
import "./CardDisplay.css";

const CardDisplay = ({ cardName, cardNumber, expDateM, expDateY }: Omit<CardholderDetailsType, "cvc">) => {
	const expDate = expDateY.length > 0 ? `${expDateM}/${expDateY}` : expDateM ? `${expDateM}/` : "";
	return (
		<div className="front-card-values">
			<img src={cardIcon} className="card-logo" alt="credit card icon" />
			<p className="cardNumber">{cardNumber || "0000 0000 0000 0000"}</p>
			<div className="second-row">
				<p className="cardName">{cardName || "Jane Appleseed"}</p>
				<p className="expDate">{expDate || "00/00"}</p>
			</div>
		</div>
	);
};

export default CardDisplay;
