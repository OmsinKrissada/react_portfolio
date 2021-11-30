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
			<h4>Source : <a href={item.source}>{item.source}</a></h4>
			{
				content.map( paragraph => paragraph)
				}
		</div>
	);
}
export default Work;
