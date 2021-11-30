import React, { useEffect, useState } from "react";
import { Projects } from "./projects";
import { useParams } from "react-router-dom";
import "./work.css";

function Work() {
	const { projectName } = useParams();
	const [item, setItem] = useState({
		name: "",
		image: "",
		source: "",
		content: [],
		});
	

	useEffect(() => {
		setItem(Projects[projectName]);
		// eslint-disable-next-line
	}, []);
	const content = item["content"];
	console.log(content)
	return (
		<div className="work">
			<h1>{item.name}</h1>
			<img className="mainimg" alt={item["name"]} src={item.image} />
			<div className="main">
				<h4>Source</h4>
				<a href={item.source}>{item.source}</a>
				{
					content.map( paragraph => paragraph)
					}
			</div> 
		</div>
	);
}
export default Work;
