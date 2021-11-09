import React, { useEffect, useCallback, useState} from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Container, Header, Content } from 'rsuite';

import Gallery from "react-photo-gallery";
import { photos } from "../photos";
import Carousel, { Modal as ModalC, ModalGateway } from "react-images";

import OD from "../components/OD";



function Test(){
	const [odopen, setOdOpen] = React.useState(false);
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
	return <div className='skill-section' id='skill'>
			<Container>
				<Header><Typography variant='h1' style={{padding:"60px 60px 60px 60px"}}>Programming</Typography></Header>
				<Container>
					<Content>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }} >
								<CardActionArea href='https://www.python.org/'>
									<CardMedia
									component="img"
									height="140"
									image="img/python.png"
									alt="python_card"
									/>
									<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Python    
										<Rating name="read-only" value={5} readOnly />
									</Typography>
									<Typography variant="body2" color="text.secondary">
									interpreted high-level general-purpose language. Its design philosophy emphasizes code readability with its use of significant indentation.
									</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/C.jpg"
									alt="C_card"
									/>
									<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										C 
										<Rating name="read-only" value={3} readOnly />
									</Typography>
									<Typography variant="body2" color="text.secondary">
									a general-purpose, procedural computer programming language supporting structured programming
									</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/cpp.jpg"
									alt="cplusplus"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										C++  
										<Rating name="read-only" value={4} readOnly />
										</Typography>
										<Typography variant="body2" color="text.secondary">
										general-purpose programming language  as an extension of the C programming language, or "C with Classes"
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/html.png"
									alt="HTML"
									/>
									<CardContent>
									<Typography gutterBottom variant="h5" component="div">
									HTML    
										<Rating name="read-only" value={3} readOnly />
									</Typography>
									<Typography variant="body2" color="text.secondary">
										standard markup language for documents designed to be displayed in a web browser.
									</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/css.png"
									alt="css"
									/>
									<CardContent>
									<Typography gutterBottom variant="h5" component="div">
									CSS    
										<Rating name="read-only" value={3} readOnly />
									</Typography>
									<Typography variant="body2" color="text.secondary">
										a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
									</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/JS.png"
									alt="javascript"
									/>
									<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										JS   
										<Rating name="read-only" value={2} readOnly />
									</Typography>
									<Typography variant="body2" color="text.secondary">
									programming language that conforms to the ECMAScript specification. JavaScript is high-level, real time compiled and multi-paradigm
									</Typography>

									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/solidity.jpg"
									alt="solidity"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										Solidity    
										<Rating name="read-only" value={1} readOnly />
                    </Typography>
									<Typography variant="body2" color="text.secondary">
                    object-oriented programming language for writing smart contracts
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/qt.jpg"
									alt="QT"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											QT 
											<Rating name="read-only" value={4} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      widget toolkit for creating graphical user interfaces and cross-platform applications that run on various software and hardware platforms
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/arduino.jpg"
									alt="arduino"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Arduino
											<Rating name="read-only" value={4} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      open-source hardware and software that designs and manufactures single-board microcontrollers for building digital devices
                    </Typography>
                  </CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/raspberrypi.png"
									alt="raspberrypi"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Raspberry PI
											<Rating name="read-only" value={4} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      series of small single-board computers developed by the Raspberry Pi Foundation in association with Broadcom. 
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/react.png"
									alt="react"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											React
											<Rating name="read-only" value={3} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      open-source front-end JavaScript library for building user interfaces or UI components
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/django.png"
									alt="django"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											React
											<Rating name="read-only" value={1} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Python-based free and open-source web framework that follows the model–template–views architectural pattern
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/flask.png"
									alt="flask"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										flask
											<Rating name="read-only" value={2} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/tf.png"
									alt="tensorflow"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										Tensorflow
											<Rating name="read-only" value={2} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      TensorFlow is a open-source software library for machine learning and artificial intelligence
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/keras.png"
									alt="keras"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										Keras
											<Rating name="read-only" value={1} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Keras is an open-source software library that provides a Python interface for artificial neural networks. 
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/scikit.png"
									alt="scikit"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										scikit
											<Rating name="read-only" value={1} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Scikit-learn is a free software machine learning library for the Python programming language. feature many algorithm design.
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/TFOD.jpg"
									alt="tensorflow object detection"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										object detection
											<Rating name="read-only" value={3} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tensorflow object detection zoo model is a technology related to computer vision and image processing with integrated architecture
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/discordpy.png"
									alt="discordpy"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										discordpy
											<Rating name="read-only" value={4} readOnly />
										</Typography>
                    <Typography variant="body2" color="text.secondary">
                      A modern, feature-rich, async ready API wraper for discord use to write discord bot
                    </Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
						<div data-aos='fade-up' className='codecard'>
							<Card sx={{ width: 345, height:270 }}>
								<CardActionArea>
									<CardMedia
									component="img"
									height="140"
									image="img/pygame.png"
									alt="pygame"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
										pygame
											<Rating name="read-only" value={4} readOnly />
										</Typography>
										<Typography variant="body2" color="text.secondary">
										  Python modules designed for writeing video games. It incluides computer graphic and sound libraries.
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</div>
					</Content>
				</Container>
			</Container>
      <Header style={{padding:"60px 60px 40px 60px"}}><Typography variant='h1' >Project</Typography>
      <Typography variant='h6' >Click to navigate to that project</Typography></Header>
			<Gallery photos={photos} direction={"column"} margin={5} onClick={openLightbox}/>
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
 
export default Test;