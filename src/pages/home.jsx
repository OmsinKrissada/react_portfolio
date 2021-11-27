import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';

function Home () {

    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }, []);
  
    return <div className="home-section" id='home'>
        <section>
            <img src="img/home/stars.png" style={{left: offset*0.25 +"px"}} alt='' id="stars"/>
            <img src="img/home/moon.png" style={{top: offset*1.5 +"px"}} alt='' id="moon"/>
            <h2 id='text' style={{marginTop: offset*1.5 +"px"}} >POP</h2>
            <p><Link activeClass='active' style={{marginTop: offset*1.5 +"px"}} to="about" id="btn" spy={true} smooth={true} offset={0} duration={300*1.5}>About</Link></p>
            <img src="img/home/mountains_behind.png" style={{top: offset*0.5 +"px"}} alt='' id="mountains_behind"/>
            <img src="img/home/mountains_front.png" style={{top: offset*0 +"px"}} alt='' id="mountains_front"/>
        </section>  
    </div>;
  };

export default Home;
