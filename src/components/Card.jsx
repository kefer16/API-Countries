import React from "react";

const Card = ({ image, name, population, region, capital }) => {
	return (
		<div className="card">
			<img src={image} alt={name} className="card__image" loading="lazy" />
			<div className="card__text">
				<h2 className="card__text__title">{name}</h2>
				<p className="card__text__description">
					<b className="card__text__description__bold">Population:</b>
					{population}
				</p>
				<p className="card__text__description">
					<b className="card__text__description__bold">Region:</b>
					{region}
				</p>
				<p className="card__text__description">
					<b className="card__text__description__bold">Capital:</b>
					{capital}
				</p>
			</div>
		</div>
	);
};

export default Card;
