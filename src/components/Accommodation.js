import React, { useState, useEffect } from 'react';
import './Accommodation.css';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [numTravelers, setNumTravelers] = useState(1);
    const [showPopup, setShowPopup] = useState(false); // State to show/hide popup

    const handlePackageClick = (packageName) => {
        if (selectedPackage === packageName) {
            setSelectedPackage(null);
            setShowPopup(false); // Hide popup if same package is clicked again
        } else {
            setSelectedPackage(packageName);
            setShowPopup(true); // Show popup when package is selected
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate('/booking-details');
    };

    const scrollLeft = () => {
        document.getElementById('package-scroll').scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        document.getElementById('package-scroll').scrollBy({ left: 300, behavior: 'smooth' });
    };

    const handleIncrement = () => {
        setNumTravelers(prev => Math.min(prev + 1, 10));
    };

    const handleDecrement = () => {
        setNumTravelers(prev => Math.max(prev - 1, 1));
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const packageDetails = {
        couples: {
            title: 'Bali Tour Package for Couples - 5 Nights',
            price: 'C$520',
            description: 'Enjoy a romantic getaway with our Bali Couples Package. Includes accommodation, sightseeing, and meals.',
            image: '/couple-package.jpg'
        },
        families: {
            title: 'Bali Tour Package for Families - 7 Nights',
            price: 'C$730',
            description: 'Have a fun family vacation with our Bali Families Package. Includes accommodation, sightseeing, and meals.',
            image: '/bali-family.webp'
        },
        honeymoon: {
            title: 'Bali Honeymoon Package - 7 Nights',
            price: 'C$1,030',
            description: 'Celebrate your love with our Bali Honeymoon Package. Includes accommodation, sightseeing, and meals.',
            image: '/honeymoon.jpg'
        },
        adventure: {
            title: 'Bali Adventure Package - 5 Nights',
            price: 'C$850',
            description: 'Get your adrenaline pumping with our Bali Adventure Package. Includes accommodation, sightseeing, and meals.',
            image: '/adventure.jpg'
        },
        luxury: {
            title: 'Bali Luxury Package - 7 Nights',
            price: 'C$1,500',
            description: 'Experience luxury like never before with our Bali Luxury Package. Includes accommodation, sightseeing, and meals.',
            image: '/luxury.jpg'
        },
        spa: {
            title: 'Bali Spa Package - 5 Nights',
            price: 'C$700',
            description: 'Relax and rejuvenate with our Bali Spa Package. Includes accommodation, sightseeing, and meals.',
            image: '/spa.jpg'
        },
    };

    return (
        <div>
            <div className="accommodation">
                <header className="accommodation-header">
                    <img src={process.env.PUBLIC_URL + '/accommodation.jpg'} alt="Travel Packages" className="header-image" />
                    <h1>Travel Packages</h1>
                </header>
                <section className="package-booking">
                    <h2>Book Your Perfect Vacation Package in Bali</h2>
                    <div className="step">
                        <h3>Step 1: Select Your Travel Dates</h3>
                        <div className="date-picker">
                            <label> Check In: <input type="date" name="CheckIn" /> </label>
                            <label> Check Out: <input type="date" name="CheckOut" /> </label>
                        </div>
                    </div>
                    <div className="step">
                        <h3>Step 2: Select Number of Travellers</h3>
                        <div className="num-travelers">
                            <button onClick={handleDecrement}>-</button>
                            <span>{numTravelers}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className="step">
                        <h3>Step 3: Select Your Travel Package</h3>
                        <p><strong>What’s Included:</strong> Accommodation, Sightseeing, Meals</p>
                        <div className="package-cards-container">
                            <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
                            <div id="package-scroll" className="package-cards">
                                {Object.keys(packageDetails).map((key) => (
                                    <div
                                        key={key}
                                        className={`package-card ${selectedPackage === key ? 'selected' : ''}`}
                                        onClick={() => handlePackageClick(key)}
                                    >
                                        <img src={process.env.PUBLIC_URL + packageDetails[key].image} alt={`${packageDetails[key].title}`} />
                                        <h4>{packageDetails[key].title}</h4>
                                        <p className="price">{packageDetails[key].price}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>
                        </div>
                    </div>
                </section>
            </div>
            {showPopup && selectedPackage && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={handleClosePopup}>X</button>
                        <h2>{packageDetails[selectedPackage].title}</h2>
                        <img src={process.env.PUBLIC_URL + packageDetails[selectedPackage].image} alt={`${packageDetails[selectedPackage].title}`} className="popup-image" />
                        <p>{packageDetails[selectedPackage].description}</p>
                        <p className="price">{packageDetails[selectedPackage].price}</p>
                        <button className="book-this-package" onClick={handleBookNow}>Book This Package</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Accommodation;
