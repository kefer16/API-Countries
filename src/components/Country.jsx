import React from "react";
import "../styles/Country.scss";

export const Country = ({
	svgImage,
	title,
	nativeName,
	population,
	region,
	subRegion,
	capital,
	topLevelDomain,
	currencies,
	languages,
}) => {
	return (
		<div className="background-body container">
			<div className="country-container container-max">
				<img className="country-image" src={svgImage} alt={`bandera de ${title}`} />
				<div className="country-descripcion">
					<p className="country-descripcion-text country-descripcion-title">{title}</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Native Name: </strong>
						{nativeName}
					</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Population: </strong>
						{population}
					</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Region: </strong>
						{region}
					</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Sub Region: </strong>
						{subRegion}
					</p>

					<hr className="separator" />
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Capital: </strong>
						{capital}
					</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">
							Top Level Domain:
						</strong>
						{topLevelDomain}
					</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Currencies: </strong>
						{currencies}
					</p>
					<p className="country-descripcion-text">
						<strong className="country-descripcion-text-bold">Languages: </strong>
						{languages}
					</p>
				</div>
			</div>
		</div>
	);
};
