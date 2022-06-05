import React from 'react';
import './Footer.css'

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <div className='footer'>
            Copywrite © In {year} All Resolve By MD Emon Hossen..
        </div>
    );
};

export default Footer;