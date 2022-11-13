import React, { useEffect, useState } from "react";
import get from "axios";
import "../styles/Description.scss";
import { Return } from "./Return";
import { BorderCountry } from "./BorderCountry";
import { Country } from "./Country";

import { useParams } from "react-router-dom";
import { Loader } from "./Loader";


const getCountries = async (codeCountry) => {
	const url = `${process.env.REACT_APP_URL_API}/alpha/${codeCountry}`;
	let data = [];
	await get(url).then(function (response) {
		data = response.data;
	});
	return data[0];
};

export const Description = (props) => {
	const { codeCountry } = useParams();
	const [countries, setCountries] = useState();

	useEffect(() => {
		window.scroll(0, 0);
		const execute = async () => {
			const dataCountry = await getCountries(codeCountry);
			setCountries(dataCountry);
		};
		execute();
	}, [codeCountry]);

	return (
		<>
			{countries ? (
				<>
					<Return key={`r${countries.cca2} `} />
					<Country
						key={countries.cca2}
						svgImage={countries.flags.svg}
						title={countries.name.common}
						nativeName={Object.values(countries.name.nativeName)[0].common}
						population={Intl.NumberFormat().format(countries.population)}
						region={countries.region}
						subRegion={countries.subregion}
						capital={countries.capital}
						topLevelDomain={countries.tld}
						currencies={Object.values(countries.currencies)[0].name}
						languages={Object.values(countries.languages).toString()}
					/>
					{/* {countries.borders ? ( */}
						<BorderCountry key={`cb${countries.cca2}`} borders={countries.borders} />
					{/* ) : (
						<></>
					)} */}
				</>
			) : (
				<Loader />
			)}
		</>
	);
};
