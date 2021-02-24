import React from "react";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png"
const Footer = () => {
  return (
		<>
			<footer className="w-100 bg-light text-center">
				<p>
					<img src={instagram} alt="" />
					@techeon2k21 ,<img src={facebook} alt=""/>cbitmcatecheon
				</p>
				<p>😎 2021 Techeon. All Rights Reserved In Terms and Conditions(Saikiran) </p>
			</footer>
		</>
	);
};
export default Footer;