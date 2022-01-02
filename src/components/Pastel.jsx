import React from "react";

const Pastel = (props) => (
	<div className={"card " + "card-"+ props.color} >
		<img className="card__image" src={props.image} alt="" />
		<div className="card__text">
			<h2 className="card__text-title">Pastel {props.sabor}</h2>
			<p className="card__text-description">{props.description}</p>
		</div>
	</div>
);

export default Pastel;
