import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/bali-logo.png'} alt="Bali Tourism Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/attractions">Attractions</Link></li>
                    <li><Link to="/accommodation">Accommodation</Link></li>
                    <li><Link to="/dining">Dining</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
