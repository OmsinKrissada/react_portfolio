import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Skill(){
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return <div className='skill-section' id='skill'>
        <Typography variant='h1' style={{paddingTop:60+"px"}}>Coding</Typography>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">Python</Typography>
            <Rating name="read-only" value={5} readOnly />
        </div>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">C++</Typography>
            <Rating name="read-only" value={4} readOnly />
        </div>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">C</Typography>
            <Rating name="read-only" value={4} readOnly />
        </div>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">HTML</Typography>
            <Rating name="read-only" value={4} readOnly />
        </div>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">CSS</Typography>
            <Rating name="read-only" value={3} readOnly />
        </div>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">Solidity</Typography>
            <Rating name="read-only" value={2} readOnly />
        </div>
        <div data-aos='fade-up'>
            <Typography variant='h5' component="legend">React jsx</Typography>
            <Rating name="read-only" value={2} readOnly />
        </div>
    </div>;
}
 
export default Skill;