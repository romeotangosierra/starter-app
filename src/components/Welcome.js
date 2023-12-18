import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Welcome = () => {
    // function squareNumber(num) {
    //     return num * num;
    // }

	return (
		<main className="main-box">
			<div className="greeting">
				<h5 className="myh5">Hey, my name is</h5>
			</div>
			<div>
				<h1 className="myh1">Riezel Serdan.</h1>
				<h2 className="myh2">I build webpages and web application.</h2>
				<div className="box1">I'm a web developer specialising in building exceptional digital experiences.<br/>
					I am currently focusing on more interactive web content. If you'd like to see <br/>
					more of my work, you can browse my Projects page.
				</div>

				<div className="box2">
					Check out my resume!
				</div>

				{/* <div>
					<Link to="/projects">
						<p>Projects</p>
					</Link>
					<Link to="/skills">
						<p>Skills</p>
					</Link>
					<Link to="/contact">
						<p>Contact</p>
					</Link>
					<Link to="/myreact">
						<p>MyReact</p>
					</Link>
				</div> */}

				{/* <button onClick={() => {
					const message = document.querySelector("#message");
					message.style.display = "block";
				}}>Show A Message</button> */}

				{/* <div style={{display: "none"}} id="message">
					<p>Hello!</p>
				</div> */}
			</div>
		</main>
		
	);
};

export default Welcome;