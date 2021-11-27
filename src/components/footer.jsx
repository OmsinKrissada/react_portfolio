import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import './footer.css'
class Footer extends React.Component {
    render() { 
        return <div className='contact-section' id='contact'>
            <div className="contact-copyright">
                <p>Papop Lekhapanyaporn ; retaehc_pop ; Pop</p>
                <p>© 2021 Retaehc, All right reserved</p>
            </div>
            <div className='contact-icon'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a href="https://twitter.com/retaehc_pop" className="fa fa-twitter"> </a>
                <a href="mailto:papop2003@gmail.com" className="fa fa-google"> </a>
                <a href="https://www.instagram.com/pop.pxp/" className="fa fa-instagram"> </a>
                <a href="https://github.com/Retaehc-pop" className="fa fa-github fa-2x" aria-hidden="true"> </a>
                <a href="tel:+66898118068" className="fa fa-phone-square fa-2x" aria-hidden="true"> </a>
                <a href="https://stackoverflow.com/users/14537225/papop-lekhapanyaporn" className="fa fa-stack-overflow" aria-hidden="true"> </a>
                <a href="https://discordapp.com/users/267572826418970624" className="fa fa-discord"><FontAwesomeIcon icon={faDiscord} size="s"/></a>
            </div>
        </div>;
    }
}
 
export default Footer;