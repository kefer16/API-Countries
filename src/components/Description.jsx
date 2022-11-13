import React, { useEffect, useState } from "react";
import get from "axios";
import "../styles/Description.scss";
import { Return } from "./Return";
import { BorderCountry } from "./BorderCountry";
import { Country } from "./Country";
import { useParams } from "react-router-dom";

const getCountries = async (codeCountry) => {
	const url = `${process.env.REACT_APP_URL_API}/alpha/${codeCountry}`;
	let data = [];
	await get(url).then(function (response) {
		data = response.data;
	});
	return data;
};

export const Description = (props) => {

	const { codeCountry } = useParams();
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		window.scroll(0, 0)
		const execute = async () => {
			const dataCountry = await getCountries(codeCountry);
			setCountries(dataCountry);
		};

		execute();
	}, [codeCountry]);

	return (
		<>
			{countries.map((countryFeatures) => (
				<>
					<Return />
					<Country
						key={countryFeatures.cca2}
						svgImage={countryFeatures.flags.svg}
						title={countryFeatures.name.common}
						nativeName={Object.values(countryFeatures.name.nativeName)[0].common}
						population={Intl.NumberFormat().format(countryFeatures.population)}
						region={countryFeatures.region}
						subRegion={countryFeatures.subregion}
						capital={countryFeatures.capital}
						topLevelDomain={countryFeatures.tld}
						currencies={Object.values(countryFeatures.currencies)[0].name}
						languages={Object.values(countryFeatures.languages).toString()}
					/>
					{countryFeatures.borders ? (
						<BorderCountry key={countryFeatures.cca3} borders={countryFeatures.borders} />
					) : (
						<></>
					)}
				</>
			))}
		</>
	);
};
