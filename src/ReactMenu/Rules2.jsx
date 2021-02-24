import React from "react";
import ind from "../images/inpdp.png";


const Rules2 = () => {
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Rules & guidelines</h1>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<div classNameName="card mb-3" style={{ maxWidth: "540px" }}>
							<div class="card mb-6 mx-auto">
								<img src={ind} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">Innovative poster design/ideas </h5>
									<p class="card-text">
										1. Individuals has to select their topic.
										<br /> 2. Topic must be innovative and useful.
										<br /> 3. Select your own topic and design the poster.
										<br /> 4. Say some useful points regarding the topic.
										<br />
										5. Present your innovative ideas on that topic.<br/> 6.video and
										audio should be on with good internet speed.
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1g8mK9Zt3mxAcpcLCUaQtfOb3ZKRPHZcPu5cJsR3SiEU/edit"
										className="btn btn-primary"
									>
										Register
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Rules2;
