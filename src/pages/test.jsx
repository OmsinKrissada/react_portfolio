import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./test.css";
// import img from '../../public/img/about/'

function Test() {
	return (
		<div className="about-section">
			<div className="section">
				<h1>I'M POP</h1>
				<h2>Papop Lekhapanyaporn</h2>
				<img className="Background" src={"/img/about/Artboard4.png"} width="auto" height={500} alt="" />
			</div>
		</div>
	);
}

export default Test;
