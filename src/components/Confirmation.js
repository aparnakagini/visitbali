import React, { useState } from 'react';
import './Confirmation.css';

const Confirmation = () => {
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the feedback submission (e.g., send it to a server)
        setSubmitted(true);
    };

    return (
        <div className="confirmation-page">
            <h1>Reservation Confirmed!</h1>
            <p>Thank you for choosing Visit Bali.com - We have sent a confirmation email to you.</p>

            <div className="feedback-section">
                <h2>We value your feedback!</h2>
                {submitted ? (
                    <p>Thank you for your feedback!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="How did you like our service? Any feedback?"
                            rows="4"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email (optional)"
                        />
                        <button type="submit">Submit Feedback</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Confirmation;
