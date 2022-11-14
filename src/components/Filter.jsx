import React, { useState } from "react";
import "../styles/Filter.scss";
import { Grid } from "./Grid";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const filterOptions = [
	{
		code: "all",
		name: "Filter to by Region",
	},
	{
		code: "africa",
		name: "Africa",
	},
	{
		code: "americas",
		name: "America",
	},
	{
		code: "asia",
		name: "Asia",
	},

	{
		code: "europe",
		name: "Europe",
	},
	{
		code: "oceania",
		name: "Oceania",
	},
];
export const Filter = () => {
	const [region, setRegion] = useState("all");
	const [search, setSearch] = useState("");

	function filterSubmit(e) {
		e.preventDefault();
	}

	function regionSelected(e) {
		setRegion(e.target.value);
	}

	function searchChange(e) {
		setSearch(e.target.value);
		e.preventDefault();
	}

	return (
		<>
			<div className="background-body container">
				<div className="filter-container container-max">
					<form onSubmit={filterSubmit} className="form-container">
						<div className="form-container-search">
							<SearchRoundedIcon className="form-container-search-icon" />
							<input
								id="input-search"
								value={search}
								onChange={searchChange}
								type="text"
								placeholder="Search for a Country"
								className="form-container-search-input"
								autoComplete="off"
							/>
						</div>

						<select
							value={region}
							onChange={regionSelected}
							className="form-container-filter"
						>
							{filterOptions.map((option) => (
								<option
									key={option.code}
									className="form-container-filter-option"
									value={option.code}
								>
									{option.name}
								</option>
							))}
						</select>
					</form>
				</div>
			</div>

			<Grid searchValue={search} peticion={region ? region : "all"} />
		</>
	);
};
