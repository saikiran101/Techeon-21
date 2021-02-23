import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact from="/" component={Home} />
				<Route exact path="/Contact" component={Contact} />
				<Route exact path="/About" component={About} />
				<Route exact path="/Service" component={Service} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
