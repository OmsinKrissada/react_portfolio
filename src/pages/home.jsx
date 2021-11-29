import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./home.css"

function Home () {

  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  return <div className="home-section" id='home'>
          <img src="img/home/BG.JPG"  alt='' id="stars"/>
          <Link to="/about"><img src="img/home/anti.png" style={{top: offset*0.5 +"px"}} alt='' id="anti"/></Link>
          <p><Link style={{marginTop: offset*1 +"px"}} to="about" id="btn">About</Link></p>
  </div>;
  };

export default Home;
