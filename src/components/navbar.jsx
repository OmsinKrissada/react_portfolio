import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
	const style = {
		// textDecoration: 'none' ,
		// color: "#ffff",
	};
	const [isOpen, setisOpen] = useState(false);

	return (
		<div className={isOpen ? "navbar" : "navbar hidden"}>
			<img className="ham" src="/hamburger.png" alt="" onClick={() => setisOpen(!isOpen)} />
			{/* <img class="ham" src="/hamburger.png" alt="" /> */}
			<Link to="/">
				<img href="#" src="/logo192.png" alt="Retaehc logo" width="50" height="50" />
			</Link>
			<p>
				<Link className="na" to="about" style={style}>
					ABOUT
				</Link>
			</p>
			<p>
				<Link className="na" to="skills" style={style}>
					SKILL
				</Link>
			</p>
			<p>
				<Link className="na" to="project" style={style}>
					PROJECT
				</Link>
			</p>
			<p>
				<Link className="na" to="milestone" style={style}>
					MILESTONE
				</Link>
			</p>
		</div>
	);
}

export default NavBar;
