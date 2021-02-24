import React from "react";
import LG from "../images/LG.jpg";

const Rules7= () => {
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
								<img src={LG} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											<u> Lan Gaming(Among Us)</u>
										</b>
									</h5>
									<p class="card-text">
										Among Us game is a multiplayer game. Among Us is basically a
										game of survival, where you either have to vote off all of
										the imposters and complete all the tasks, and the imposter
										has to kill all of the crewmates or stop them from
										completing the designated tasks to win. If you are
										designated a crewmate your task is to find the imposter.
										<br />
										<u>
											<b>Rules</b>
										</u>
										<br />
										1. Player must have an account. <br />
										2. Please play your game from such a place where there is no
										power break down and from such a fully charged mobile which
										has a strong Internet (Broadband connection).
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1vEttn2qTHj4VZucEHV6zitey1itxhw9OmNKGibRsCO0/edit"
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
export default Rules7;
