import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="attractions-footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>Visit Bali.com</p>
                    <div className="social-icons">
                        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="footer-center">
                    <img src={process.env.PUBLIC_URL + '/bali-logo.png'}alt="Bali Tourism" className="footer-logo" />
                </div>
                <div className="footer-right">
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
