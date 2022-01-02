import { useEffect, useState } from "react";
import get from "axios";
import Card from "./Card";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Grid = ({ peticion }) => {
	const [cards, setCards] = useState();
	const url = `${process.env.REACT_APP_URL_API}${peticion}`;
	console.log(url);
	useEffect(() => {
		get(url)
			.then(({ data }) => setCards(data))
			.catch((e) => console.log(e));
	}, [peticion]);

	return (
		<div className="container dark_mode">
			<form action="" className="container-max form">
				<div className="form__search" action="">
					<SearchRoundedIcon className="form__search__icon" />
					<input
						type="text"
						placeholder="Search for a Country"
						className="form__search__input"
					/>
				</div>

				<select name="" id="" className="form__filter">
					<option className="form__filter__option" value="0">
						Filter to by Region
					</option>
					<option className="form__filter__option" value="0">
						Africa
					</option>
					<option className="form__filter__option" value="0">
						America
					</option>
				</select>
			</form>
			{cards ? (
				<div className="container-max gridCountries">
					{cards.map((c) => {
						const id = c.cca3;
						return (
							<Card
								key={id}
								image={c.flags.png}
								name={c.name.common}
								population={c.population.toLocaleString('en-US')}
								region={c.region}
								capital={c.capital}
							/>
						);
					})}
				</div>
			) : (
				<span>Cargando...</span>
			)}
		</div>
	);
};

export default Grid;
