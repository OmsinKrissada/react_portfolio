import React, { useEffect, useState } from "react";

function Home () {

    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }, []);
  
    return <div className="home-section" id='home'>
        <section>
            <img src="img/stars.png" style={{left: offset*0.25 +"px"}} alt='' id="stars"/>
            <img src="img/moon.png" style={{top: offset*1.5 +"px"}} alt='' id="moon"/>
            <h2 id='text' style={{marginTop: offset*1.5 +"px"}} >POP</h2>
            <a href="#about" style={{marginTop: offset*1.5 +"px"}} id="btn">Explore</a>
            <img src="img/mountains_behind.png" style={{top: offset*0.5 +"px"}} alt='' id="mountains_behind"/>
            <img src="img/mountains_front.png" style={{top: offset*0 +"px"}} alt='' id="mountains_front"/>
        </section>  
    </div>;

  };

export default Home;
