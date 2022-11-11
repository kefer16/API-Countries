import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";
import { Description } from "./components/Description";
import { Header } from "./components/Header";


const App = () => (
	<Router>
		<Header />
		{/* <Routes>
			<Route path="/" element={<Grid peticion={"/all"} />} />
			<Route path="/" element={<Grid peticion={"/description"} />} />
		</Routes> */}
		<Description />	
	</Router>
);

export default App;

