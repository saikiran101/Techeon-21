import React from "react";
import "./App.css";
import web from "../src/images/main p.jpg";
import Common from "./Common";

const Home = () => {
  return (
		<>
			<Common
			  name="Chaitanya Bharathi Institute of Technology.
				    Department of MCA Proudly Presents"
				imgsrc={web}
				visit="/service"
				btname="Get started"
			/>
		</>
	);
};

export default Home;
