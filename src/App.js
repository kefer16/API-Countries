import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/config/config.scss";
import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

const App = () => (
	<Router >
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/region/:region" element={<Home />} />
			<Route path="/description/:codeCountry" element={<Description />} />
		</Routes>
	</Router>
);

export default App;
