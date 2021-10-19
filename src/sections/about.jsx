import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function About () {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return <div className='about-section' id='about'>
        <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        bullets={false}
        // fillParent={true}
      >
        <div data-src="img\Artboard3.png" />
        <div data-src="img\Artboard2.png" />
        <div data-src="img\Artboard1.png" />
        <div data-src="img\Artboard4.png" />
      </AutoplaySlider>
  </div>;
    
};
 
export default About;