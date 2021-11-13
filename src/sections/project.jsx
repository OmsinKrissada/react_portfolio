import React, { useEffect, useCallback, useState} from "react";
import Typography from '@mui/material/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Header } from 'rsuite';

import Gallery from "react-photo-gallery";
import { photos } from "../photos";
import Carousel, { Modal as ModalC, ModalGateway } from "react-images";

// import OD from "../components/OD";



function Project(){
	// const [odopen, setOdOpen] = React.useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		window.open(photo.href)
	    setCurrentImage(index);
	    setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
	    setCurrentImage(0);
	    setViewerIsOpen(false);
	};

	useEffect(() => {
		Aos.init({duration:1000});
	}, [])
	return <div className='project-section' id='skill'>
			<Header  data-aos='fade-up' style={{padding:"60px 60px 40px 60px"}}><Typography variant='h1' >Project</Typography>
			<Typography variant='h6' >Click to navigate to that project</Typography></Header>
			<Gallery  data-aos='fade-up' photos={photos} direction={"column"} margin={5} onClick={openLightbox}/>
			<ModalGateway>
				{viewerIsOpen ? (
				<ModalC onClose={closeLightbox}>
					<Carousel
					currentIndex={currentImage}
					views={photos.map(x => ({
						...x,
						srcset: x.srcSet,
						caption: x.title
					}))}
					/>
				</ModalC>
				) : null}
			</ModalGateway>
			</div>;
}
 
export default Project;