import React from "react";

import SkillBar from 'react-skillbars';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function Skill(){
    return <div className='skill-section' id='skill'>
        <Typography variant='h1'>Coding</Typography>
        <Typography variant='h5' component="legend">Python</Typography>
        <Rating name="read-only" value={5} readOnly />
        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptatibus unde veniam blanditiis non obcaecati voluptas aspernatur omnis! Sunt, fugiat ratione facilis maiores excepturi recusandae dicta suscipit quasi dolor aperiam!</Typography>
        <Typography variant='h5' component="legend">Python</Typography>
        <Rating name="read-only" value={5} readOnly />
        <Typography variant='h5' component="legend">Python</Typography>
        <Rating name="read-only" value={5} readOnly />
        <Typography variant='h5' component="legend">Python</Typography>
        <Rating name="read-only" value={5} readOnly />
        
    </div>;
}
 
export default Skill;