import React from "react";
import pp from "../images/pp.jpg"

const Rules1 = () => {
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
								<img src={pp} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">PAPER PRESENTATION RULES: </h5>
									<p class="card-text">
										1.The abstract should be sent to the mail id before atleast
										1 day before the event to the given mail id.
										<br /> 2.The paper should be in IEEE format.
										<br /> 3.The topics should be related to computer science.
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1-mlUsZNUhnt39_VmjA4pbqy5BrwYEjEVbtRTdMYeack/edit"
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
export default Rules1;
