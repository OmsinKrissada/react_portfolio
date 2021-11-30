import React, { useEffect, useCallback, useState } from "react";
import Typography from "@mui/material/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import { Header } from "rsuite";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Carousel from "react-images";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

import OD from "../components/OD";
import "./project.css";

function Project() {
	const navigate = useNavigate();
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);
	const [isLink, setisLink] = useState(false);
	const [link, setLink] = useState("");
	const [box, setbox] = useState(0);
	const [cls, setcls] = useState(0);
	const [score, setscore] = useState(0);
	const [label, setlabel] = useState({});

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
		setisLink(photo.type === "link" ? true : false);
		if (!isLink) {
			setLink(photo.link);
			setbox(photo.box);
			setcls(photo.cls);
			setscore(photo.score);
			setlabel(photo.label);
		}
		navigate(photo.name, { replace: true });
		// eslint-disable-next-line
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

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
			<Modal open={viewerIsOpen} onClose={closeLightbox}>
				{isLink ? (
					<Box sx={{ position: "absolute" }}>
						<Fab size="small" color="warning" onClick={closeLightbox} aria-label="add">
							<CloseIcon />
						</Fab>
						<Carousel currentIndex={currentImage} views={photos.map(x => ({ ...x, srcset: x.srcSet, caption: x.title }))} />
					</Box>
				) : (
					<Box sx={{ position: "absolute", left: "40%", width: 400 }}>
						<Typography>This is a Object detection for ....</Typography>
						<OD link={link} box={box} cls={cls} score={score} label={label} />
					</Box>
				)}
			</Modal>
		</div>
	);
}

export default Project;
