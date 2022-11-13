import { border } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/BorderCountry.scss";

export const BorderCountry = ({ borders }) => {
	return (
		<div className="darck-body container">
			<div className="bordercountry-container container-max">
				<p className="bordercountry-title">Border Countries:</p>
				<div className="bordercountry">
					{borders !== undefined ? (
						borders.map((country) => (
							<Link
								key={country}
								to={`/description/${country}`}
								className="bordercountry-item"
							>
								{country}
							</Link>
						))
					) : (
						<p className="bordercountry-nofound">No border country found</p>
					)}
				</div>
			</div>
		</div>
	);
};
