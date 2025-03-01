import { useState } from "react";
import Button from "../Button/Button";
import "./UserMessage.css";

interface UserMessageProps {
	message: string;
}

const UserMessage = ({ message }: UserMessageProps) => {
	return (
		<div className="message-container">
            <div className="message-content">

            </div>
			<Button text={message} />
		</div>
	);
};

export default UserMessage