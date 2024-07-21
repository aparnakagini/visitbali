import React, { useState, useEffect } from 'react';
import './Dining.css';

const restaurantsData = [
    {
        id: 'restaurant1',
        name: 'Sorrento Restaurant',
        image: '/restaurant1.jpg',
        rating: 4.5,
        meal: 'dinner',
        cuisine: 'italian',
        priceRange: '$$$'
    },
    {
        id: 'restaurant2',
        name: 'Limestones Eatery & Restaurant',
        image: '/restaurant2.jpg',
        rating: 4.0,
        meal: 'lunch',
        cuisine: 'thai',
        priceRange: '$$'
    },
    {
        id: 'restaurant3',
        name: 'Arcadia Restaurant',
        image: '/restaurant3.jpg',
        rating: 4.5,
        meal: 'breakfast',
        cuisine: 'mexican',
        priceRange: '$$'
    },
    {
        id: 'restaurant4',
        name: 'Spice Bar',
        image: '/restaurant4.jpg',
        rating: 4.0,
        meal: 'dinner',
        cuisine: 'indian',
        priceRange: '$'
    },
    {
        id: 'restaurant5',
        name: 'Bella Italian Restaurant',
        image: '/restaurant5.jpg',
        rating: 3.0,
        meal: 'dinner',
        cuisine: 'italian',
        priceRange: '$$$'
    },
    {
        id: 'restaurant6',
        name: 'Lemongrass Thai Cuisine',
        image: '/restaurant6.jpg',
        rating: 2.0,
        meal: 'dinner',
        cuisine: 'thai',
        priceRange: '$'
    },
];

const Dining = () => {
    const [meal, setMeal] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);

    useEffect(() => {
        filterRestaurants();
    }, [meal, cuisine, priceRange, rating]);

    const filterRestaurants = () => {
        let filtered = restaurantsData;
        if (meal) {
            filtered = filtered.filter(restaurant => restaurant.meal === meal);
        }
        if (cuisine) {
            filtered = filtered.filter(restaurant => restaurant.cuisine === cuisine);
        }
        if (priceRange) {
            filtered = filtered.filter(restaurant => restaurant.priceRange === priceRange);
        }
        if (rating) {
            filtered = filtered.filter(restaurant => Math.floor(restaurant.rating) === parseFloat(rating));
        }
        setFilteredRestaurants(filtered);
    };

    const getStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="fas fa-star"></i>);
            } else if (i - rating < 1) {
                stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>);
            }
        }
        return stars;
    };

    return (
        <div className="dining-page">
            <header className="dining-header">
                <img src={process.env.PUBLIC_URL + '/dining.jpg'} alt="Dining" className="dining-image" />
                <h1 className="dining-title">Dining</h1>
            </header>
            <section className="dining-intro">
                <h2>Discover Bali Through Food</h2>
                <div className="filters">
                    <div className="filter">
                        <label htmlFor="meal">Meal</label>
                        <select id="meal" name="meal" value={meal} onChange={(e) => setMeal(e.target.value)}>
                            <option value="">Choose a Meal</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="cuisine">Cuisine</label>
                        <select id="cuisine" name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                            <option value="">Choose a Cuisine</option>
                            <option value="thai">Thai</option>
                            <option value="mexican">Mexican</option>
                            <option value="indian">Indian</option>
                            <option value="italian">Italian</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="price-range">Price Range</label>
                        <select id="price-range" name="price-range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                            <option value="">Select a Price Range</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option value="">Select a Rating</option>
                            <option value="5">5 Star</option>
                            <option value="4">4 Star</option>
                            <option value="3">3 Star</option>
                            <option value="2">2 Star</option>
                        </select>
                    </div>
                </div>
            </section>
            <section className="dining-options">
                <h2>Explore Your Dining Options</h2>
                <h3>Results</h3>
                <div className="restaurant-cards">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map(restaurant => (
                            <div key={restaurant.id} id={restaurant.id} className="restaurant-card">
                                <img src={process.env.PUBLIC_URL + restaurant.image} alt={restaurant.name} />
                                <h4>{restaurant.name}</h4>
                                <div className="rating-stars">
                                    {getStars(restaurant.rating)}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">0 Results</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Dining;
