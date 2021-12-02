import React, { useEffect, useState } from "react";
import { Projects } from "./projects";
import { useParams } from "react-router-dom";
import "./work.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function Work() {
	const { projectName } = useParams();
	const [item, setItem] = useState({
		name: "",
		image: "",
		source: "",
		bg: "",
		content: [],
		});
	

	useEffect(() => {
		setItem(Projects[projectName]);
		// eslint-disable-next-line
	}, []);
	const content = item["content"];
	return (
		<div className="work">
			<img alt="" src={item.bg} className="background"/>
			<div className="content">
				<img alt="" src={item.image} className="cover"/>
				<h1 className="header">{item.name} <a href={item.source}><GitHubIcon id="icon"/></a></h1>
				{
					content.map( paragraph => paragraph)
					}
			</div>
		</div>
	);
}
export default Work;
