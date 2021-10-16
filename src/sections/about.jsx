import React from "react";
import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles';
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
        <div data-src="img\C.png" />
        <div data-src="img\Profile.jpg" />
        <div data-src="img\python.jpg" />
        <div data-src="img\Cplus.jpg" />
        <div data-src="img\dbd.jpg" />
      </AutoplaySlider>
  </div>;
    
};
 
export default About;