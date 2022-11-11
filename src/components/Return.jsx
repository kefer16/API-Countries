import React from "react";
import "../styles/Return.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const Return = () => {
	return (
		<div className="return__container">
			<button className="return__container-button">
				{" "}
				<KeyboardBackspaceIcon /> Back
			</button>
		</div>
	);
};
