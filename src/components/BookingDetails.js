import React, { useState } from 'react';
import './BookingDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Timer from './Timer'; // Make sure to import your Timer component

const BookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [language, setLanguage] = useState('en'); // Language state
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });
    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Validate form fields (excluding payment information)
    const validate = () => {
        let tempErrors = {};
        tempErrors.fullName = /^[a-zA-Z\s]+$/.test(form.fullName) ? '' : language === 'en' ? 'Name must contain only letters' : 'Le nom ne doit contenir que des lettres';
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : language === 'en' ? 'Email is not valid' : 'L\'email n\'est pas valide';
        tempErrors.phoneNumber = form.phoneNumber.length >= 10 ? '' : language === 'en' ? 'Phone number is not valid' : 'Le numéro de téléphone n\'est pas valide';
        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === '');
    };

    const handleConfirmBooking = () => {
        if (validate()) {
            navigate('/confirmation');
        }
    };

    return (
        <div className="booking-details">
            <Timer initialMinutes={15} initialSeconds={0} /> {/* Add the Timer component here */}
            <button onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}>
                {language === 'en' ? 'French' : 'English'}
            </button>
            <h2>{language === 'en' ? 'Step 4: Enter Your Personal and Payment Information' : 'Étape 4 : Entrez vos informations personnelles et de paiement'}</h2>
            <div className="step">
                <div className="personal-details">
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder={language === 'en' ? 'Full Name' : 'Nom complet'} 
                        value={form.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder={language === 'en' ? 'Phone Number' : 'Numéro de téléphone'} 
                        value={form.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    <input 
                        type="text" 
                        name="address" 
                        placeholder={language === 'en' ? 'Address' : 'Adresse'} 
                        value={form.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="payment-info">
                    <label className="payment-label">{language === 'en' ? '-- Payment --' : '-- Paiement --'}</label>
                    <div className="payment-inputs">
                        <div className="payment-input-container">
                            <input 
                                type="text" 
                                name="cardNumber" 
                                placeholder={language === 'en' ? 'Card Number' : 'Numéro de carte'} 
                                value={form.cardNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="payment-input-container">
                            <input 
                                type="text" 
                                name="expiryDate" 
                                placeholder={language === 'en' ? 'Expiry Date (MM/YY)' : 'Date d\'expiration (MM/AA)'} 
                                value={form.expiryDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="payment-input-container">
                            <input 
                                type="text" 
                                name="cvc" 
                                placeholder="CVC" 
                                value={form.cvc}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button className="confirm-booking" onClick={handleConfirmBooking}>{language === 'en' ? 'Confirm Booking' : 'Confirmer la réservation'}</button>
        </div>
    );
}

export default BookingDetails;
