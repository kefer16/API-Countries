import React from "react";
import "../styles/Loader.scss";
import { LoaderSVG } from "./LoaderSVG";
import ClipLoader from "react-spinners/ClipLoader";
export const Loader = ({ oculte }) => {
	return (
		<div
			className={`loader-container ${
				oculte ? "loader-container-oculte" : ""
			}`.trim()}
		>
			{/* <LoaderSVG /> */}
			
			<ClipLoader color="#ffffff" />
		</div>
	);
};
