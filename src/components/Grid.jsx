import { useEffect, useState } from "react";
import get from "axios";
import { Card } from "./Card";
import "../styles/Grid.scss";
import { Loader } from "./Loader";

const getCountries = async (searchValue, peticion) => {
	let url = "",data = [];

	if (peticion === "all") {
		url = `${process.env.REACT_APP_URL_API}/${peticion}`;
	} else {
		url = `${process.env.REACT_APP_URL_API}/region/${peticion}`;
	}

	await get(url).then(function (response) {
		data = response.data;
	});

	if (searchValue) {
		data = data.filter(function (item) {
			return item.name.common.toLowerCase().includes(searchValue.toLowerCase());
		});
	}

	return data;
};

export const Grid = ({ searchValue, peticion }) => {
	const [cards, setCards] = useState();

	useEffect(() => {
		
		const execute = async () => {
			const dataCountries = await getCountries(searchValue, peticion);
			setCards(dataCountries);
		};

		execute();
	}, [searchValue, peticion]);

	return (
		<div className="darck-body container">
			{cards ? (
				<div className="gridcountries container-max ">
					{cards.length === 0 ? (
						<p className="gridcountries-vacio">No country found, change filters</p>
					) : (
						<></>
					)}
					{cards.map((card) => {
						return (
							<Card
								key={card.cca3}
								code={card.cca3}
								image={card.flags.png}
								name={card.name.common}
								population={card.population.toLocaleString("en-US")}
								region={card.region}
								capital={card.capital}
							/>
						);
					})}
				</div>
			) : (
				<Loader oculte={false}/>
			)}
		</div>
	);
};
