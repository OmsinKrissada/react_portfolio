import React from "react";
import { Link } from 'react-scroll';

class NavBar extends React.Component {
    render() { 
        return <div className="navbar">
            <img href="#" src='logo192.png' alt='Retaehc logo'width="50" height="50"/>
            <p className="active"><Link activeClass='active'  to="home" spy={true} smooth={true} offset={0} duration={300}>HOME</Link></p>
            <p><Link activeClass='active' to="about" spy={true} smooth={true} offset={0} duration={300*1.5}>ABOUT</Link></p>
            <p><Link activeClass='active' to="skill" spy={true} smooth={true} offset={0} duration={300*2}>SKILL</Link></p>
            <p><Link activeClass='active' to="project" spy={true} smooth={true} offset={0} duration={300*2.5}>PROJECT</Link></p>
            <p><Link activeClass='active' to="milestone" spy={true} smooth={true} offset={0} duration={300*2.5}>MILESTONE</Link></p>
            <p><Link activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={300*3}>CONTACT</Link></p>
        </div>;
    }
}
 
export default NavBar;
