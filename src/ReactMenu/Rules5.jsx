import React from "react";
import wc from "../images/wc.jpg";

const Rules5 = () => {
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
								<img src={wc} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">Word Chase Guidelines/Rules:-</h5>
									<p class="card-text">
										There will be 3 rounds.
										<br />
										1. The video and audio must be on tillthe game ends.
										<br />
										2.The decision of Co-ordinator is the final one.
										<br />
										3.Please have a stable internet connection avoid
										disturbance.
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1fphDoGvkHa-C2mHGB5ulofg1lzVp_wPRWLADkux_YpI/edit"
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
export default Rules5;
