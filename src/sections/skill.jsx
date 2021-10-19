import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Container, Header, Content } from 'rsuite';

import OD from "../components/OD";



function Skill(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                        Most preferred language. I can code best with python.
                                        I code python in many project.Design UI, Data visualization, Games and a lot more!
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
                                        I start learn programming with C language. C teach me fundamental programming.
                                        I mostly use C to read libraries.
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
                                            I started learning C++ after C. I prefer C++ over C due to its simplicity. 
                                            I use C++ a lot in IOT to program micro-controller.
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
                                        I haven't learn HTML properly until 2020. Before that I read HTML when I inspect webpage.
                                        Every Web project which I build has HTML code. 
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
                                        I start learning Css and HTML together. I have fundamental
                                        understanding with css which use along with my project.
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
                                        Javascript is like a brain to website development. I use Javascript from time to time.
                                        Javascript is not a strong language for me.
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
                                            My father encourage me to learn Solidity because he and i both have interest in Crypto currency.
                                            I have learn it. but haven't use it yet.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
                <Container>
                    <div data-aos='fade-up' className=''>
                        <Typography variant='h3' style={{paddingTop:60+"px"}}>Machine Learning</Typography>
                    </div>
                    <Content>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea onClick={handleOpen}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="img/TFOD.jpg"
                                        alt="TFOD"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Object Detection
                                        <Rating name="read-only" value={4} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        I am fond of Object detection and image recognision. I start with using open source model then after a while I start creating my own!
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                                                 
                            </Card>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                                <OD></OD>
                            </Modal>
                        </div> 
                        {console.log(open)}
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="img/MLAI.jpeg"
                                    alt="AI"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        ML & AI
                                        <Rating name="read-only" value={2} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        I use Machine learing with Keras and Tensorflow. Studing data with regression, CNN, with both supervise and unsupervise learing. 
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
                                    image="img/data.jpg"
                                    alt="Data"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Data Analysis
                                        <Rating name="read-only" value={3} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        My published research both use machine learning in order to analyse data and display a visulise data.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
                <Container>
                        <div data-aos='fade-up' className=''>
                            <Typography variant='h3' style={{paddingTop:60+"px"}}>Internet Of Things</Typography>
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
                                        I start learning Arduino when I join SPACE AC. CanSat project has been buid with Arduino.
                                        I get data from sensor and use it along with IOT.
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
                                        I use Raspberry pi in server managment and Camera. Coding in Linux-base is similar to x86.
                                        I need to learn some linux command to use it too!
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Content>
                </Container>
                <Container>
                <div data-aos='fade-up' className=''>
                    <Typography variant='h3' style={{paddingTop:60+"px"}}>Website Development</Typography>
                </div>
                    <Content>
                        <div data-aos='fade-up' className='codecard'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea href='#'>
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
                                        React is an amazing tools to build Website. This website is aloso created with react.
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
                                       Django has an amazing backend. I have learned it a while ago but find it hard to work with.
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
                                        A popular light weight website backend as flask is easy to use. I have use this for a few projects.
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