import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-bali">
                <div className="bali-info">
                    <h2>Bali, Indonesia</h2>
                    <p>Land of the Gods</p>
                    <p>Nestled in the heart of the Indonesian archipelago, Bali is a captivating island known for its stunning landscapes, rich cultural heritage, and vibrant arts scene. Often referred to as the "Land of the Gods," Bali's allure lies in its unique blend of natural beauty and spiritual depth.</p>
                    <p> From the lush, terraced rice paddies of Ubud to the pristine beaches of Seminyak, Bali offers a diverse array of experiences for every type of traveler. The island is a haven for surfers, with world-class waves at Kuta, Uluwatu, and Canggu. Meanwhile, the serene waters of Nusa Dua provide the perfect setting for a relaxing beach holiday.</p>
                    <p>Whether you seek adventure, relaxation, or cultural enrichment, Bali promises an unforgettable journey that will leave you enchanted and inspired.</p>
                </div>
                <div className="bali-info">
                    <img src={process.env.PUBLIC_URL + '/map.jpg'} alt="Bali On The Map" />
                </div>
            </div>
        </section>
    );
}

export default About;
