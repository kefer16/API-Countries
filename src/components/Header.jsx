import React, { useState } from "react";
import "../styles/Header.scss";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

export const Header = () => {
	const [activeDarck, setActiveDarck] = useState(false);

	function asignBackgroundMode() {
		setActiveDarck(!activeDarck);
		const divRoot = document.getElementById("root");
		divRoot.classList.toggle("dark-mode");
	}

	return (
		<header className="background-header container">
			<nav className="header-container container-max">
				<h1 className="header-container-title">Where in the World?</h1>
				<span onClick={asignBackgroundMode} className="header-container-mode">
					{activeDarck ? (
						<>
							<NightsStayRoundedIcon className="header-container-mode-ligth" /> Darck
							Mode
						</>
					) : (
						<>
							<WbSunnyRoundedIcon className="header-container-mode-darck" />
							Ligth Mode
						</>
					)}
				</span>
			</nav>
		</header>
	);
};
