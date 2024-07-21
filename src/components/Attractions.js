import React from 'react';
import './Attractions.css';

const Attractions = () => {
    return (
        <div>
            <div className="attractions">
                <header className="attractions-header">
                    <img src={process.env.PUBLIC_URL + '/attractions.jpg'} alt="Attractions" className="attractions-image" />
                    <h1>Attractions</h1>
                </header>
                <section className="top-attractions">
                    <h2>Top 10 Attractions In Bali</h2>
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/JaDRqp3aQdQ"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Top 10 Places To Visit in Bali"
                        ></iframe>
                    </div>
                </section>
                <section className="explore-areas">
                    <h2>Explore Bali By Area</h2>
                    <div className="area-cards">
                        <div className="area-card">
                            <img src={process.env.PUBLIC_URL + '/diamond-beach.jpg'} alt="Diamond Beach" />
                            <h3>DIAMOND BEACH</h3>
                            <p>Diamond Beach is renowned for its stunning white sandy shores and crystal-clear turquoise waters, offering breathtaking views and a serene atmosphere. This picturesque beach, located on Nusa Penida Island, is a popular destination for visitors seeking a tranquil escape and unforgettable scenery.</p>
                        </div>
                        <div className="area-card">
                            <img src={process.env.PUBLIC_URL + '/ubud.jpg'} alt="Ubud" />
                            <h3>UBUD</h3>
                            <p>Ubud is a cultural heartland known for its traditional arts and crafts, lush landscapes, and tranquil atmosphere. This charming town is surrounded by rice paddies, ancient temples, and vibrant markets, offering a rich and immersive experience for visitors and travelers of all ages and interests.</p>
                        </div>
                        <div className="area-card">
                            <img src={process.env.PUBLIC_URL + '/kelingking-beach.jpg'}alt="Kelingking Beach" />
                            <h3>KELINGKING BEACH</h3>
                            <p>Kelingking Beach is famous for its dramatic cliff formations that resemble a T-Rex, offering breathtaking views of the turquoise ocean below. This hidden gem on Nusa Penida Island provides a stunning, adventurous escape with its secluded white sandy beach and striking scenery.</p>
                        </div>
                        <div className="area-card">
                            <img src={process.env.PUBLIC_URL + '/sekumpul.jpg'}alt="Sekumpul" />
                            <h3>SEKUMPUL</h3>
                            <p>Sekumpul Waterfall is a magnificent natural wonder, featuring a collection of seven waterfalls surrounded by lush jungle. This breathtaking spot is renowned for its scenic beauty and offers a serene and refreshing experience for those willing to embark on the adventurous trek to reach it.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Attractions;
