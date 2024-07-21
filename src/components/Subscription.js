import React from 'react';
import './Subscription.css';

const Subscription = () => {
    return (
        <section className="subscription">
            <h2>Subscribe And Get A Free Travel E-Book</h2>
            <form>
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Subscription;
