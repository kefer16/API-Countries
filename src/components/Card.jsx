import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Card = ({ code, image, name, population, region, capital }) => {
	return (
		<Link to={`/description/${code}`} className="card">
			<Suspense  delayMs={3000} fallback={<h1 className="card-image">cargando</h1>}>
				<LazyLoadImage
					src={image}
					alt={name}
					className="card-image"
					effect="black-and-white"
				/>
			</Suspense>

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
