import React, { useEffect, useCallback } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Header } from "rsuite";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { useNavigate } from "react-router-dom";
import "./project.css";

function Project() {
	const navigate = useNavigate();

	const openLightbox = useCallback((event, { photo, index }) => {
		navigate(photo.name, { replace: true });
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	
	return (
		<div className="project-section" id="project">
			<Header data-aos="fade-up" >
				<h1> Projects </h1>
				<p> Click to navigate </p>
			</Header>
			<Gallery data-aos="fade-up" photos={photos} direction={"column"} margin={5} onClick={openLightbox} />
		</div>
	);
}

export default Project;
