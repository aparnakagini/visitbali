import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <img src={process.env.PUBLIC_URL + '/home.jpg'} alt="Visit Bali" />
            <div className="hero-text">
                <h1>Visit Bali</h1>
                <p>Your Most Reliable Bali Travel Guide</p>
            </div>
        </section>
    );
}

export default Hero;
