import React, { useEffect} from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

function About () {
  useEffect(() => {
		Aos.init({ duration: 1000 ,
      easing: 'ease-in-sine'});
	}, []);

	return (
		<div className="about-section">
			<div className="section">
				<img className="Background" src="/img/about/Artboard4.png" alt="" />
				<h1 data-aos="fade-up" id="text">I'M POP</h1>
				<h1 data-aos="fade-up" id="text">Papop Lekhapanyaporn</h1>
			</div>
      		<div className="section">
				<img className="Background" src="/img/about/pic2.jpg" alt="" />
				<h1 data-aos="fade-up" id="text">Education</h1>
				<SchoolIcon data-aos="fade-up" id="text"/>
				<a href="https://www.assumption.ac.th/" style={{textDecoration:"none"}}><h1 data-aos="fade-up" id="text">Assumption College, Bangkok,Thailand</h1></a>
			</div>
			<div className="section">
				<img className="Background" src="/img/about/pic1.jpg" alt="" />
				<h1 data-aos="fade-up" id="text">Software Developer</h1>
				<CodeIcon id="text"/>
				<GitHubIcon id="text"/>
			</div>
			<div className="section">
				<img className="Background" src="/img/about/pic3.jpg" alt="" />
				<h1 data-aos="fade-up" id="text">Check out my Project</h1>
				<Link to="/project"><h1 data-aos="fade-up" id="btn">my Project</h1></Link>
			</div>
		</div>
	);
    
};
 
export default About;