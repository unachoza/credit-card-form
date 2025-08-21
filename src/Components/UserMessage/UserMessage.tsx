import { MessageType } from "../../utils/types";
import Button from "../Button/Button";
import iconComplete from "../../assets/images/icon-complete.svg";
import "./UserMessage.css";

interface UserMessageProps {
	message: MessageType;
	reset: () => void;
}

const UserMessage = ({ message, reset }: UserMessageProps) => {
	return (
		<div className="message-container">
			<img src={iconComplete} alt="complete check" />
			<div className="message-content">
				<div className="title">{message.title}</div>
				<div className="content">{message.content}</div>
			</div>
			<Button text="Continue" type="reset" handleClick={() => reset()} />
		</div>
	);
};

export default UserMessage;
