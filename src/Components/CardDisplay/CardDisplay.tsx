import cardIcon from "../../assets/images/card-logo.svg";
import "./CardDisplay.css";

interface CardDisplayProps {
	cardNumber: string;
	cardName: string;
	expDate?: number | null | string;
	cvc?: number | null | string;
}

const CardDisplay = ({ cardName, cardNumber, expDate }: CardDisplayProps) => {
	return (
		<div className="front-card-values">
			<img src={cardIcon} className="card-logo" alt="credit card icon" />
			<p className="cardNumber">{cardNumber || "0000 0000 0000 0000"}</p>
			<p className="cardName">{cardName || "Jane Appleseed"}</p>
			<p className="expDate">{expDate || "00/00"}</p>
		</div>
	);
};

export default CardDisplay;
