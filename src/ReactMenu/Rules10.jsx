import React from "react";
import CD from "../images/CD.jpg";


const Rules10 = () => {
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
								<img src={CD} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											<u>Code Dectective </u>
										</b>
									</h5>
									<p class="card-text">
										<u>
											<b>Rules</b>
										</u>
										<br />
										1. Answer should be completed with in given time.
										<br /> 2. No extra time will be given.
										<br /> 3. Video and audio should be on through out the
										meeting.
										<br /> 4. Please ensure that you have proper internet
										connection.
										<br /> 5. Game to be conducted either on Zoom or Google
										Meet.
										<br /> 6. All the participants should login
										<br />
										<u>
											<b>guidelines</b>
										</u>
										<br />
										1.One of our coordinators will share their screen in which
										question will be displayed.
										<br />
										2. Participants will be given one and half minute in which
										you have to read and answer the question.
										<br />
										3. Participants should send their answers through chat box.
									</p>
									<a
										href="https://docs.google.com/forms/d/1xP4m4tDOWaB6MjS48uaMavSKRjwzZUxxDeoLG5JtdIw/edit"
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
export default Rules10;
