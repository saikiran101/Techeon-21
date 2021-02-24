import React from "react";
import Rc from "../images/Rc.jpg";


const Rules4 = () => {
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
								<img src={Rc} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">Reverse Coding:</h5>
									<p class="card-text">
										1.This is an IOI style contest. This means that the problems
										will be partially graded. You will get score for passing
										certain test data.
										<br />
										2. The details of the failed test cases will also be visible
										on your solution page.
										<br />
										3. You can submit solutions as many times as you'd like,
										there are no penalties for incorrect submissions. Only your
										best correct submission will be considered.
										<br />
										4. Those who achieve the score first will be placed higher
										in the ranklist in case of a tie.
										<br />
										5.We have removed all the Institutions that we could not
										identify from our database. We request you to update your
										institutions once again by going to your profile page.
										<br />
										6. You can also send in your queries in an email to
										help@codechef.com, during the contest.
										<br />
										7. Please do not discuss strategy, suggestions or tips in
										the comments during a live contest. Posting questions
										clarifying the problem statement is ok. If you are unsure,
										email us at feedback@codechef.com .<br />
										8. Discussing CodeChef's problems or any aspect of problem,
										on any other platform on web, on identification, could lead
										to disabling of respective account and banning from the
										community.
										<br />
									</p>
									<a
										href="https://docs.google.com/forms/d/1A07CG7c1MCUObK-u966xP2G4SpHj5IwfG1skfFXOIeg/edit"
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
export default Rules4;
