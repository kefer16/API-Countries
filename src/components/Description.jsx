import React from "react";
import "../styles/Description.scss";
import { Return } from "./Return";

export const Description = ({ flagName }) => {
	return (
		<div className="flag-container">
			<Return />
			<img className="flag__image" src="" alt={`bandera de ${flagName}`} />
			<div className="flag__descripcion">
				<h2 className="flag__descripcion-title">Belgin</h2>
				<p className="flag__descripcion-name">Belgie</p>
				<p className="flag__descripcion-region">Europe</p>
				<p className="flag__descripcion-subregion">Western Europe</p>
				<p className="flag__descripcion-capital">Brussels</p>
				<p className="flag__descripcion-toplevel">.be</p>
				<p className="flag__descripcion-currencies">Euro</p>
				<p className="flag__descripcion-languages">{`Dutch, Germany`}</p>
			</div>
			<div className="flag__similar">
				<span className="flag__similar__item">France</span>
				<span className="flag__similar__item">Germany</span>
				<span className="flag__similar__item">Netherlands</span>
			</div>
		</div>
	);
};
