import React from "react";
import "../styles/Return.scss";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from "react-router-dom";

export const Return = () => {
	return (
		<div className="darck-body container">
			<div className="return-container container-max">
				<Link to="/" className="return-container-button">
					<KeyboardBackspaceRoundedIcon /> Back
				</Link>
			</div>
		</div>
		
	);
};
