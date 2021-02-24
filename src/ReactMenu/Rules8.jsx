import React from "react";
import TT from "../images/tt.jpg";

const Rules8 = () => {
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
								<img src={TT} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											<u> Tech Talk</u>
										</b>
									</h5>
									<p class="card-text">
										<u>
											<b>RULES:</b>
										</u>
										<br />
										1.Should have good internet connection.
										<br /> 2.Come with your own topic.
										<br /> 3.If topic is already registered,then it will be in
										first come first serve.it will be finalized before two days
										of event.
										<br /> 4.People should talk minimum 8 to 10 min.
									</p>
									<a
										href="https://docs.google.com/forms/d/1kU2VHXLGZ4zk2ZgsYpBG-xFN0p6-75jAf7k3i_HD1D0/edit"
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
export default Rules8;
