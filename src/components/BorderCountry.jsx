import { border } from "@mui/system";
import React, { useEffect } from "react";
import get from "axios";
import { Link } from "react-router-dom";
import "../styles/BorderCountry.scss";
import { useState } from "react";

const getNameBorders = async (borders) => {
	let data = [],
		url = "";

	let codes = borders === undefined ? "" : borders.toString();

	if (codes) {
		url = `${process.env.REACT_APP_URL_API}/alpha?codes=${codes}`;
		await get(url).then(function (response) {
			data = response.data;
		});
	}

	return data;
};

export const BorderCountry = ({ borders }) => {
	const [itemBoder, setItemBorder] = useState([]);

	useEffect(() => {
		const execute = async () => {
			const dataCountries = await getNameBorders(borders);
			setItemBorder(dataCountries);
		};

		execute();
	}, [borders]);

	return (
		<div className="background-body container">
			<div className="bordercountry-container container-max">
				<p className="bordercountry-title">Border Countries:</p>
				<div className="bordercountry">
					{itemBoder.length > 0 ? (
						itemBoder.map((country) => (
							<Link
								key={country.cca2}
								to={`/description/${country.cca2}`}
								className="bordercountry-item"
							>
								{country.name.common}
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
