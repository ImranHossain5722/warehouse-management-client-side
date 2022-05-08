import React from 'react';
import './Footer.css'
const Footer = () => {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer className='text-center footer-wrap'>
            <p className='text-center'>  &#169; copyright {year} </p>
        </footer>
    );
};

export default Footer;