import React, { useEffect} from "react";
import "./test.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Test() {

  useEffect(() => {
		Aos.init({ duration: 1000 ,
      easing: 'ease-in-sine'});
	}, []);

	return (
		<div className="about-section">
			<div className="section">
        <img className="Background" src={"/img/about/Artboard4.png"} alt="" />
        <h1 data-aos="fade-up" id="text">I'M POP</h1>
				<h1 data-aos="fade-up" id="text">Papop Lekhapanyaporn</h1>
			</div>
      <div className="section">
        <img className="Background" src={"/img/about/Artboard4.png"} alt="" />
        <h1 data-aos="fade-up" id="text">I'M POP</h1>
				<h1 data-aos="fade-up" id="text">Papop Lekhapanyaporn</h1>
			</div>
		</div>
	);
}

export default Test;
