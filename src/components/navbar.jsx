import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
    render() { 
        const style = {
            // textDecoration: 'none' ,
            // color: "#ffff",
        } 
        return <div className="navbar">
            <Link to="/"><img href="#" src='logo192.png' alt='Retaehc logo'width="50" height="50"/></Link>
            <p><Link className='na'to="about" style={style}>ABOUT</Link></p>
            <p><Link className='na'to="skills" style={style}>SKILL</Link></p>
            <p><Link className='na'to="project" style={style}>PROJECT</Link></p>
            <p><Link className='na'to="milestone" style={style}>MILESTONE</Link></p>
        </div>;
    }
}
 
export default NavBar;
