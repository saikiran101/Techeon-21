import React from "react";
import SG from "../images/SG.png";

const Rules6 = () => {
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
								<img src={SG} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											<u>Skribble</u>
										</b>
									</h5>
									<p class="card-text">
										skribbl.io is a multiplayer drawing and guessing game. One
										game consists of a few rounds in which every round
										participant has to draw their word (which is given by
										coordinator) and others have to guess it to gain points, The
										person with the most points at the end of game will then be
										crowned as the winner !<br />
										1. Video and Audio should be on.
										<br /> 2. Please play your game from such a place where
										there is no power break down and from such a fully charged
										mobile which has a strong Internet (Broadband connection).
										<br /> 3. Game will be going to held on zoom or google meet.
										<br /> 4. The final decision will be of the coordinators, if
										you go against their decisions, then your points will be
										deducted.
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1DhRBwdsOnohEN8tB_YKBRpW95_HTZ2CBtGZsb1qPg4A/edit"
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
export default Rules6;
