import React from "react";
import ITQ from "../images/ITQ.png";

const Rules3 = () => {
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
								<img src={ITQ} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										Pari Gnana (Technical Quiz) Guidelines/Rules:-
									</h5>
									<p class="card-text">
										There will be 4 rounds in which two rounds will be
										elimination.
										<br />
										1.The video and audio must be on till the game ends. <br />
										2.The decision of quiz master is the final one.
										<br /> 3.Please have a stable internet connection to avoid
										disturbance.
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1bnMq_ayCobzD3rckjP-DINiqQdlmMAsMWk-fte3l60k/edit"
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
export default Rules3;
