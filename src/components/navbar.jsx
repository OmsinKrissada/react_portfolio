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
		<div className="navbar">
			<img className="ham" src="/hamburger.png" alt="" onClick={() => setisOpen(!isOpen)} />
			{/* <img class="ham" src="/hamburger.png" alt="" /> */}
			<div className={isOpen ? "navbox" : "hidden navbox"}>
				<Link onClick={() => setisOpen(false)} to="/">
					<img href="#" src="/logo192.png" alt="Retaehc logo" width="50" height="50" />
				</Link>
				<p>
					<Link className="na" to="about" onClick={() => setisOpen(false)} style={style}>
						ABOUT
					</Link>
				</p>
				<p>
					<Link className="na" to="skills" onClick={() => setisOpen(false)} style={style}>
						SKILL
					</Link>
				</p>
				<p>
					<Link className="na" to="project" onClick={() => setisOpen(false)} style={style}>
						PROJECT
					</Link>
				</p>
				<p>
					<Link className="na" to="milestone" onClick={() => setisOpen(false)} style={style}>
						MILESTONE
					</Link>
				</p>
			</div>
		</div>
	);
}

export default NavBar;
