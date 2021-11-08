import React from "react";

class Contact extends React.Component {

    
    render() { 
        return <div className='contact-section' id='contact'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <a href="https://twitter.com/retaehc_pop" className="fa fa-twitter"> </a>
            <a href="mailto:papop2003@gmail.com" className="fa fa-google"> </a>
            <a href="https://www.instagram.com/pop.pxp/" className="fa fa-instagram"> </a>
            <a href="https://github.com/Retaehc-pop" className="fa fa-github fa-2x" aria-hidden="true"> </a>
            <a href="tel:+66898118068" className="fa fa-phone-square fa-2x" aria-hidden="true"> </a>
            <a href="https://stackoverflow.com/users/14537225/papop-lekhapanyaporn" className="fa fa-stack-overflow" aria-hidden="true"> </a>
        </div>;
    }
}
 
export default Contact;