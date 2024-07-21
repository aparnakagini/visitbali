import React from 'react';
import './Packages.css';
import { useNavigate } from 'react-router-dom';

const Packages = () => {

    const navigate = useNavigate();

    const handleBrowseMore = () => {
        navigate('/accommodation');
    };

    return (
        <section className="packages">
            <h2>Featured Bali Travel Packages</h2>
            <div className="package-list">
                <div className="package-item">
                    <img src={process.env.PUBLIC_URL + '/couple-package.jpg'} alt="Couples Package" />
                    <h3>Bali Tour Package for Couples - 5 Nights</h3>
                    <p className="price">C$520</p>
                </div>
                <div className="package-item">
                    <img src={process.env.PUBLIC_URL + '/bali-family.webp'} alt="Families Package" />
                    <h3>Bali Tour Package for Families - 7 Nights</h3>
                    <p className="price">C$730</p>
                </div>
                <div className="package-item">
                    <img src={process.env.PUBLIC_URL + '/honeymoon.jpg'} alt="Honeymoon Package" />
                    <h3>Bali Honeymoon Package - 7 Nights</h3>
                    <p className="price">C$1,030</p>
                </div>
            </div>
            <button className="browse-more" onClick={() => navigate('/accommodation')}>Browse More Bali Packages →</button>
        </section>
    );
}

export default Packages;
