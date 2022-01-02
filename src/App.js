import React from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Grid from "./components/Grid";
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";

const App = () => (
	<Router>
		<Header/>
		<Routes>
			<Route path="/" element={<Grid peticion={"/all"} />} />
		</Routes>
				
	</Router>
);

export default App;

