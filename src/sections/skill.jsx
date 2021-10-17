import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { CardActionArea } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { Container, Header, Content, Sidebar } from 'rsuite';

import OD from "../components/OD";



function Skill(){
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    return <div className='skill-section' id='skill'>
            <Container>
                <Header><Typography variant='h1' style={{paddingTop:60+"px"}}>Programming</Typography></Header>
                <Container>
                        <div data-aos='fade-up'>
                        <Typography variant='h3' style={{paddingTop:60+"px"}}>Coding</Typography>
                        </div>
                    <Content>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        <Rating name="read-only" value={4} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        <Rating name="read-only" value={4} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/JS.png"
                                    alt="javascript"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Javascript
                                        <Rating name="read-only" value={3} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
                <Container>
                    <div data-aos='fade-up' className=''>
                        <Typography variant='h3' style={{paddingTop:60+"px"}}>Mechine Learning</Typography>
                    </div>
                    <Content>
                        {/* <Button color="secondary" variant="outlined" onClick={() => setOpen(true)}>
                            <Typography variant='h5' >Open</Typography>
                        </Button> */}
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/data.jpeg"
                                    alt="TFOD"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Object Detection
                                        <Rating name="read-only" value={4} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/data.jpeg"
                                    alt="AI"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        AI
                                        <Rating name="read-only" value={1} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/data.jpeg"
                                    alt="Data"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Data Analysis
                                        <Rating name="read-only" value={1} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
                <Container>
                        <div data-aos='fade-up' className=''>
                            <Typography variant='h3' style={{paddingTop:60+"px"}}>Internet Of things</Typography>
                        </div>
                    <Content>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/raspberrypi.png"
                                    alt="raspberry pi"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Raspberry Pi
                                        <Rating name="read-only" value={3} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
                <Container>
                        <div data-aos='fade-up' className=''>
                            <Typography variant='h3' style={{paddingTop:60+"px"}}>Web development</Typography>
                        </div>
                    <Content>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
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
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/django.png"
                                    alt="django"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Django
                                        <Rating name="read-only" value={1} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/flask.png"
                                    alt="flask"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Flask
                                        <Rating name="read-only" value={2} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
            </Container>
    </div>;
}
 
export default Skill;