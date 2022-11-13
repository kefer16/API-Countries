import React from "react";
import { Link } from "react-router-dom";
import "../styles/BorderCountry.scss";

export const BorderCountry= ({borders}) => {
	
	return (
		<div className="darck-body container">
			<div className="bordercountry-container container-max">
				<p className="bordercountry-title">Border Countries:</p>
				<div className="bordercountry">
					{borders.map((country) => (
						<Link to={`/description/${country}#title-container`} className="bordercountry-item">{country}</Link>
					))}
				</div>
				
			</div>
		</div>
	);
};
