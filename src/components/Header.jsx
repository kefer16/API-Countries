import React from "react";
import "../styles/Header.scss";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";

export const Header = () => (
	<header className="darck-header container">
		<nav className="header-container container-max">
			<h1 id="title-container" className="header-container-title">Where in the World?</h1>
			<span className="header-container-mode">
				<NightsStayRoundedIcon /> Darck Mode
			</span>
		</nav>
	</header>
);

