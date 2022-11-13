import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";

export const Card = ({ code,image, name, population, region, capital }) => {
	return (
		<Link to={`/description/${code}`} className="card">
			<img src={image} alt={name} className="card-image" loading="lazy" />
			<div className="card-text">
				<h2 className="card-text-title">{name}</h2>
				<p className="card-text-description">
					<b className="card-text-description-bold">Population:</b>
					{population}
				</p>
				<p className="card-text-description">
					<b className="card-text-description-bold">Region:</b>
					{region}
				</p>
				<p className="card-text-description">
					<b className="card-text-description-bold">Capital:</b>
					{capital}
				</p>
			</div>
		</Link>
	);
};
